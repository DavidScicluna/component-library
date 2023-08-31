import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_COLOR__,
	__DEFAULT_OUTLINE_OFFSET__,
	__DEFAULT_OUTLINE_WIDTH__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useAppTheme, useConst, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';
import { getColorHue, getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { PushableOverlayProps, PushableOverlayVariant } from '../types';

type UsePushableOverlayClassesProps<Element extends ElementType> = Pick<
	PushableOverlayProps<Element>,
	'color' | 'colorMode' | 'isActive' | 'isDisabled' | 'isFixed' | 'isPushable' | 'radius' | 'variant'
>;
type UsePushableOverlayClassesReturn = ClassName;

const usePushableOverlayClasses = <Element extends ElementType>(
	props: UsePushableOverlayClassesProps<Element>
): UsePushableOverlayClassesReturn => {
	const { colorMode: __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__,
		isActive: active = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: disabled = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: fixed = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isPushable: pushable = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius: r = __DEFAULT_RADIUS__,
		variant: v = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(active);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFixed = useGetResponsiveValue<boolean>(fixed);
	const isPushable = useGetResponsiveValue<boolean>(pushable);

	const radius = useGetResponsiveValue<ThemeRadius>(r);

	const variant = useGetResponsiveValue<PushableOverlayVariant>(v);

	const rootClasses = useMemo<ClassName>(() => {
		const { base } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const r = getResponsiveValue<ThemeRadius>(radius);

		return classNames(
			classes.layout.position.relative,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.borders.border_width[base],
			classes.borders.border_width.before[base],
			classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
			classes.borders.border_style.before[__DEFAULT_BORDER_STYLE__],
			classes.borders.border_color.transparent,
			classes.borders.border_radius[r],
			classes.borders.border_radius.before[r],
			{
				[classes.borders.outline_style.focus_visible.dashed]: isPushable && !isFixed,
				[classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__]]: isPushable && !isFixed,
				[classes.borders.outline_offset.focus_visible[__DEFAULT_OUTLINE_OFFSET__]]: isPushable && !isFixed
			}
		);
	}, [isDisabled, isFixed, isPushable, radius, variant]);

	const pseudoClasses = useConst<ClassName>(
		classNames(
			classes.layout.position.before.absolute,
			classes.layout.top.before[0],
			classes.layout.bottom.before[0],
			classes.layout.left.before[0],
			classes.layout.right.before[0],
			classes.layout.z_index.before[0]
		)
	);

	const pushableClasses = useMemo<ClassName>(() => {
		const { base, pushable, active, hover } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		return classNames(
			classes.interactivity.cursor[!isFixed ? 'pointer' : 'default'],
			classes.interactivity.pointer_events.auto,
			classes.effects.opacity[100],
			{
				[classes.borders.border_t_width[base]]: variant !== 'transparent',
				[classes.borders.border_b_width[pushable]]: variant !== 'transparent',
				[classes.borders.border_t_width.hover[active]]: !isFixed && variant !== 'transparent',
				[classes.borders.border_b_width.hover[hover]]: !isFixed && variant !== 'transparent',
				[classes.borders.border_t_width.active[hover]]: !isFixed && variant !== 'transparent',
				[classes.borders.border_b_width.active[active]]: !isFixed && variant !== 'transparent'
			}
		);
	}, [isPushable, isFixed, variant]);

	const activeClasses = useMemo<ClassName>(() => {
		const { active, hover } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		return classNames(classes.interactivity.cursor.default, classes.interactivity.pointer_events.none, {
			[classes.borders.border_t_width[hover]]: variant !== 'transparent',
			[classes.borders.border_b_width[active]]: variant !== 'transparent'
		});
	}, [variant]);

	const disabledClasses = useMemo<ClassName>(() => {
		const { active, hover } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		return classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.pointer_events.none,
			classes.effects.opacity[50],
			{
				[classes.borders.border_t_width[hover]]: variant !== 'transparent',
				[classes.borders.border_b_width[active]]: variant !== 'transparent'
			}
		);
	}, [variant]);

	const containedColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	const lightColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'lighter' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	const darkColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'darker' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	const monochromeColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	const outlinedColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	const transparentColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color[color][outlineHue]);
	}, [color, colorMode]);

	return classNames(rootClasses, pseudoClasses, {
		[pushableClasses]: isPushable && !isDisabled && !isActive,
		[activeClasses]: isPushable && !isDisabled && isActive,
		[disabledClasses]: isPushable && isDisabled,
		[containedColorClasses]: isPushable && variant === 'contained',
		[lightColorClasses]: isPushable && variant === 'light',
		[darkColorClasses]: isPushable && variant === 'dark',
		[outlinedColorClasses]: isPushable && variant === 'outlined',
		[monochromeColorClasses]: isPushable && variant === 'monochrome',
		[transparentColorClasses]: isPushable && variant === 'transparent'
	});
};

export default usePushableOverlayClasses;
