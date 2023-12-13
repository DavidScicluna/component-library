import { useMemo } from 'react';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_COLOR__,
	__DEFAULT_OUTLINE_OFFSET__,
	__DEFAULT_OUTLINE_WIDTH__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { PushableOverlayProps } from '../types';

import usePushableOverlayResponsiveValues from './usePushableOverlayResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type PickedPushableOverlayProps =
	| 'color'
	| 'colorMode'
	| 'isActive'
	| 'isDisabled'
	| 'isFixed'
	| 'isOutlined'
	| 'isPushable'
	| 'radius'
	| 'variant';
type UsePushableOverlayClassesProps = Pick<PushableOverlayProps, PickedPushableOverlayProps>;
type UsePushableOverlayClassesReturn = ClassName;

const usePushableOverlayClasses = (props: UsePushableOverlayClassesProps): UsePushableOverlayClassesReturn => {
	const { colorMode: __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_PUSHABLE_OVERLAY_COLORMODE__,
		isActive: isActiveProp = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: isDisabledProp = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: isFixedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isOutlined: isOutlinedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
		isPushable: isPushableProp = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const { isActive, isDisabled, isFixed, isOutlined, isPushable, radius, variant } =
		usePushableOverlayResponsiveValues({
			isActive: isActiveProp,
			isDisabled: isDisabledProp,
			isFixed: isFixedProp,
			isOutlined: isOutlinedProp,
			isPushable: isPushableProp,
			radius: radiusProp,
			variant: variantProp
		});

	const rootClasses = useMemo<ClassName>(() => {
		const { base } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		const outlineHue = getColorHue({ colorMode, type: 'background' });

		return classNames(
			classes.layout.position.relative,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			{
				[classes.borders.border_width.before[base]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_style.before[__DEFAULT_BORDER_STYLE__]]:
					variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_color.transparent]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_radius[radius]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_radius.before.inherit]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.layout.display.outline]: isOutlined,
				[classes.borders.outline_color.gray[outlineHue]]: isOutlined,
				[classes.borders.outline_style.solid]: isOutlined,
				[classes.borders.outline_width[__DEFAULT_OUTLINE_WIDTH__]]: isOutlined,
				[classes.borders.outline_offset[0]]: isOutlined,
				[classes.layout.display.focus_visible.outline]: isPushable && !isFixed,
				[classes.borders.outline_style.focus_visible.dashed]: isPushable && !isFixed,
				[classes.borders.outline_width.focus_visible[__DEFAULT_OUTLINE_WIDTH__]]: isPushable && !isFixed,
				[classes.borders.outline_offset.focus_visible[__DEFAULT_OUTLINE_OFFSET__]]: isPushable && !isFixed
			}
		);
	}, [colorMode, isDisabled, isFixed, isOutlined, isPushable, radius, variant]);

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
			{
				[classes.effects.opacity[100]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_t_width[base]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_b_width[pushable]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_t_width.hover[active]]:
					!isFixed && variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_b_width.hover[hover]]:
					!isFixed && variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_t_width.active[hover]]:
					!isFixed && variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_b_width.active[active]]:
					!isFixed && variant !== 'transparent' && variant !== 'unstyled'
			}
		);
	}, [isPushable, isFixed, variant]);

	const activeClasses = useMemo<ClassName>(() => {
		const { active, hover } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		return classNames(classes.interactivity.cursor.default, classes.interactivity.pointer_events.none, {
			[classes.borders.border_t_width[hover]]: variant !== 'transparent' && variant !== 'unstyled',
			[classes.borders.border_b_width[active]]: variant !== 'transparent' && variant !== 'unstyled'
		});
	}, [variant]);

	const disabledClasses = useMemo<ClassName>(() => {
		const { active, hover } = __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__;

		return classNames(classes.interactivity.cursor.default, classes.interactivity.pointer_events.none, {
			[classes.effects.opacity[50]]: variant !== 'unstyled',
			[classes.borders.border_t_width[hover]]: variant !== 'transparent' && variant !== 'unstyled',
			[classes.borders.border_b_width[active]]: variant !== 'transparent' && variant !== 'unstyled'
		});
	}, [variant]);

	const containedColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
	}, [color, colorMode]);

	const lightColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'light' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
	}, [color, colorMode]);

	const darkColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'dark' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
	}, [color, colorMode]);

	const monochromeColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
	}, [color, colorMode]);

	const outlinedColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
	}, [color, colorMode]);

	const transparentColorClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'color' });

		return classNames(classes.borders.outline_color.focus_visible[color][outlineHue]);
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
