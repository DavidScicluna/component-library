import { useMemo } from 'react';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_OUTLINE_WIDTH__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__ } from '@components/Navigation/components/Tabs/common/constants';
import { useTabsContext } from '@components/Navigation/components/Tabs/common/hooks';

import {
	__DEFAULT_TAB_IS_ACTIVE__,
	__DEFAULT_TAB_IS_COMPACT__,
	__DEFAULT_TAB_IS_DISABLED__,
	__DEFAULT_TAB_IS_UPPERCASE__
} from '../constants';
import type { TabProps } from '../types';

import useTabResponsiveValues from './useTabResponsiveValues';
import useTabSizeConfig from './useTabSizeConfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type PickedTabProps = 'color' | 'colorMode' | 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase';
type UseTabClassesProps = Pick<TabProps, PickedTabProps> & { isFocused: boolean };
type UseTabClassesReturn = Record<'tab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useTabClasses = (props: UseTabClassesProps): UseTabClassesReturn => {
	const { colorMode: __DEFAULT_TAB_COLORMODE__ } = useAppTheme();
	const { orientation } = useTabsContext();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_TAB_COLORMODE__,
		isActive: isActiveProp = __DEFAULT_TAB_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_TAB_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_TAB_IS_DISABLED__,
		isUppercase: isUppercaseProp = __DEFAULT_TAB_IS_UPPERCASE__
	} = props;

	const { isActive, isCompact, isDisabled, isUppercase } = useTabResponsiveValues({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp
	});

	const config = useTabSizeConfig({ isCompact });

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
			classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__],
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
			classes.typography.line_height[__DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__],
			classes.typography.transform[isUppercase ? 'uppercase' : 'normal'],
			classes.typography.text_overflow.ellipsis,
			classes.typography.whitespace.nowrap
		)
	};
};

export default useTabClasses;
