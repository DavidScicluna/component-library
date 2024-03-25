import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import {
	DEFAULT_BORDER_STYLE,
	DEFAULT_COLOR,
	DEFAULT_OUTLINE_OFFSET,
	DEFAULT_OUTLINE_WIDTH,
	DEFAULT_RADIUS
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
	DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
	DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
	DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE,
	DEFAULT_PUSHABLE_OVERLAY_VARIANT
} from '../constants';
import type { PushableOverlayUniqueProps } from '../types';

import usePushableOverlayResponsiveValues from './usePushableOverlayResponsiveValues';

type PickedPushableOverlayUniqueProps =
	| 'color'
	| 'colorMode'
	| 'isActive'
	| 'isDisabled'
	| 'isFixed'
	| 'isOutlined'
	| 'isPushable'
	| 'radius'
	| 'variant';
type UsePushableOverlayClassesProps = Pick<PushableOverlayUniqueProps, PickedPushableOverlayUniqueProps>;
type UsePushableOverlayClassesReturn = ClassName;

const usePushableOverlayClasses = (props: UsePushableOverlayClassesProps): UsePushableOverlayClassesReturn => {
	const { colorMode: DEFAULT_PUSHABLE_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_PUSHABLE_OVERLAY_COLORMODE,
		isActive: isActiveProp,
		isDisabled: isDisabledProp,
		isFixed: isFixedProp,
		isOutlined: isOutlinedProp,
		isPushable: isPushableProp,
		radius: radiusProp,
		variant: variantProp
	} = props;

	const {
		isActive = DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
		isDisabled = DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
		isFixed = DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
		isOutlined = DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
		isPushable = DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
		radius = DEFAULT_RADIUS,
		variant = DEFAULT_PUSHABLE_OVERLAY_VARIANT
	} = usePushableOverlayResponsiveValues({
		isActive: isActiveProp,
		isDisabled: isDisabledProp,
		isFixed: isFixedProp,
		isOutlined: isOutlinedProp,
		isPushable: isPushableProp,
		radius: radiusProp,
		variant: variantProp
	});

	const rootClasses = useMemo<ClassName>(() => {
		const { base } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

		const outlineHue = getColorHue({ colorMode, type: 'background' });

		return classNames(
			classes.layout.position.relative,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			{
				[classes.borders.border_width.before[base]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_style.before[DEFAULT_BORDER_STYLE]]:
					variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_color.transparent]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_radius[radius]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_radius.before.inherit]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.layout.display.outline]: isOutlined,
				[classes.borders.outline_color.gray[outlineHue]]: isOutlined,
				[classes.borders.outline_style.solid]: isOutlined,
				[classes.borders.outline_width[DEFAULT_OUTLINE_WIDTH]]: isOutlined,
				[classes.borders.outline_offset[0]]: isOutlined,
				[classes.layout.display.focus_visible.outline]: isPushable && !isFixed,
				[classes.borders.outline_style.focus_visible.dashed]: isPushable && !isFixed,
				[classes.borders.outline_width.focus_visible[DEFAULT_OUTLINE_WIDTH]]: isPushable && !isFixed,
				[classes.borders.outline_offset.focus_visible[DEFAULT_OUTLINE_OFFSET]]: isPushable && !isFixed
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
		const { base, pushable } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

		return classNames(
			classes.interactivity.cursor[!isFixed ? 'pointer' : 'default'],
			classes.interactivity.pointer_events.auto,
			{
				[classes.effects.opacity[100]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_t_width[base]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_b_width[pushable]]: variant !== 'transparent' && variant !== 'unstyled'
			}
		);
	}, [isPushable, isFixed, variant]);

	const pushableHoverClasses = useMemo<ClassName>(() => {
		const { active, hover } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

		return classNames(classes.borders.border_t_width.hover[active], classes.borders.border_b_width.hover[hover]);
	}, []);

	const pushableActiveClasses = useMemo<ClassName>(() => {
		const { active, hover } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

		return classNames(
			classes.borders.border_t_width.active[hover],
			classes.borders.border_b_width.active[active],
			classes.borders.border_t_width.hover.active[hover],
			classes.borders.border_b_width.hover.active[active]
		);
	}, []);

	const activeClasses = useMemo<ClassName>(() => {
		const { active, hover } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

		return classNames(classes.interactivity.cursor.default, classes.interactivity.pointer_events.none, {
			[classes.borders.border_t_width[hover]]: variant !== 'transparent' && variant !== 'unstyled',
			[classes.borders.border_b_width[active]]: variant !== 'transparent' && variant !== 'unstyled'
		});
	}, [variant]);

	const disabledClasses = useMemo<ClassName>(() => {
		const { active, hover } = DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE;

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
		[pushableHoverClasses]:
			isPushable && !isDisabled && !isActive && !isFixed && variant !== 'transparent' && variant !== 'unstyled',
		[pushableActiveClasses]:
			isPushable && !isDisabled && !isActive && !isFixed && variant !== 'transparent' && variant !== 'unstyled',
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
