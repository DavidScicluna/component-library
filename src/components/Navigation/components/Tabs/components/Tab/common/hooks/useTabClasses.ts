import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_OUTLINE_WIDTH__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__ } from '@components/Navigation/components/Tabs/common/constants';

import {
	__DEFAULT_TAB_IS_ACTIVE__,
	__DEFAULT_TAB_IS_COMPACT__,
	__DEFAULT_TAB_IS_DISABLED__,
	__DEFAULT_TAB_IS_UPPERCASE__
} from '../constants';
import type { TabDefaultElement, TabElement, TabProps } from '../types';

import useTabSizeConfig from './useTabSizeConfig';

type UseTabClassesProps<Element extends TabElement = TabDefaultElement> = Pick<
	TabProps<Element>,
	'color' | 'colorMode' | 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase'
> & { isFocused: boolean };
type UseTabClassesReturn = Record<'tab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;

const useTabClasses = <Element extends TabElement = TabDefaultElement>(
	props: UseTabClassesProps<Element>
): UseTabClassesReturn => {
	const { colorMode: __DEFAULT_TAB_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_TAB_COLORMODE__,
		isActive: active = __DEFAULT_TAB_IS_ACTIVE__,
		isCompact: compact = __DEFAULT_TAB_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_TAB_IS_DISABLED__,
		isUppercase: uppercase = __DEFAULT_TAB_IS_UPPERCASE__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(active);
	const isCompact = useGetResponsiveValue<boolean>(compact);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const config = useTabSizeConfig<Element>({ isCompact });

	const tabClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
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
		topDivider: classNames(
			classes.backgrounds.background_color.transparent,
			classes.borders.border_radius_bl.full,
			classes.borders.border_radius_br.full
		),
		bottomDivider: classNames(
			dividerColorClassname,
			classes.borders.border_radius_tl.full,
			classes.borders.border_radius_tr.full
		),
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
