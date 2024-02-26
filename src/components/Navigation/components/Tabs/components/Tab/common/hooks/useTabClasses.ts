import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_OUTLINE_WIDTH } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE } from '@components/Navigation/components/Tabs/common/constants';
import { useTabsContext } from '@components/Navigation/components/Tabs/common/hooks';

import {
	DEFAULT_TAB_IS_ACTIVE,
	DEFAULT_TAB_IS_COMPACT,
	DEFAULT_TAB_IS_DISABLED,
	DEFAULT_TAB_IS_UPPERCASE
} from '../constants';
import type { TabElement, TabProps } from '../types';

import useTabResponsiveValues from './useTabResponsiveValues';
import useTabSizeConfig from './useTabSizeConfig';

type PickedTabProps = 'color' | 'colorMode' | 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase';
type UseTabClassesProps<Element extends TabElement> = Pick<TabProps<Element>, PickedTabProps> & { isFocused: boolean };
type UseTabClassesReturn = Record<'tab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useTabClasses = <Element extends TabElement>(props: UseTabClassesProps<Element>): UseTabClassesReturn => {
	const { colorMode: DEFAULT_TAB_COLORMODE } = useAppTheme();
	const { orientation } = useTabsContext();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_TAB_COLORMODE,
		isActive: isActiveProp = DEFAULT_TAB_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_TAB_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_TAB_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_TAB_IS_UPPERCASE
	} = props;

	const { isActive, isCompact, isDisabled, isUppercase } = useTabResponsiveValues<Element>({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp
	});

	const config = useTabSizeConfig<Element>({ isCompact });

	const tabClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.sizing.min_width.max,
			classes.interactivity.cursor[isActive || isDisabled ? 'default' : 'pointer'],
			classes.interactivity.pointer_events[isActive || isDisabled ? 'none' : 'auto'],
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.effects.opacity[isDisabled ? 50 : 100],
			classes.layout.display.focus_visible.outline,
			classes.borders.outline_style.focus_visible.dashed,
			classes.borders.outline_width.focus_visible[DEFAULT_OUTLINE_WIDTH],
			classes.borders.outline_offset.focus_visible[0],
			classes.borders.outline_color.focus_visible[color][outlineHue]
		);
	}, [color, colorMode, isActive, isDisabled]);

	const textColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isActive && !isDisabled ? 'color' : 'default',
		hueType: isActive && !isDisabled ? 'color' : 'text.primary',
		classType: 'text'
	});
	const dividerColorClassname = useGetColor({
		color,
		colorMode,
		colorType: isActive && !isDisabled ? 'color' : 'default',
		hueType: isActive && !isDisabled ? 'color' : 'text.primary',
		classType: 'bg'
	});

	return {
		tab: classNames(tabClasses),
		topDivider: classNames(classes.borders.border_radius_bl.full, classes.borders.border_radius_br.full, {
			[dividerColorClassname]: orientation === 'top',
			[classes.backgrounds.background_color.transparent]: orientation === 'bottom'
		}),
		bottomDivider: classNames(classes.borders.border_radius_tl.full, classes.borders.border_radius_tr.full, {
			[dividerColorClassname]: orientation === 'bottom',
			[classes.backgrounds.background_color.transparent]: orientation === 'top'
		}),
		label: classNames(
			textColorClassname,
			classes.typography.align.center,
			classes.typography.font_size[config.fontSize],
			classes.typography.font_weight.semibold,
			classes.typography.letter_spacing.normal,
			classes.typography.line_height[DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE],
			classes.typography.transform[isUppercase ? 'uppercase' : 'normal'],
			classes.typography.text_overflow.ellipsis,
			classes.typography.whiteSpace.nowrap
		)
	};
};

export default useTabClasses;
