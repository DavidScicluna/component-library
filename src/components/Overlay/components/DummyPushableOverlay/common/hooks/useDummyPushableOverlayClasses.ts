import { useMemo } from 'react';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_OUTLINE_WIDTH__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { DummyPushableOverlayProps } from '../types';

import useDummyPushableOverlayResponsiveValues from './useDummyPushableOverlayResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseDummyPushableOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	DummyPushableOverlayProps<Element>,
	'colorMode' | 'isAnimated' | 'isOutlined' | 'radius' | 'variant'
>;
type UseDummyPushableOverlayClassesReturn = ClassName;

const useDummyPushableOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseDummyPushableOverlayClassesProps<Element>
): UseDummyPushableOverlayClassesReturn => {
	const { colorMode: __DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		colorMode = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE__,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const { isAnimated, isOutlined, radius, variant } = useDummyPushableOverlayResponsiveValues<Element>({
		isAnimated: isAnimatedProp,
		isOutlined: isOutlinedProp,
		radius: radiusProp,
		variant: variantProp
	});

	const rootClasses = useMemo<ClassName>(() => {
		const outlineHue = getColorHue({ colorMode, type: 'background' });

		return classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.pointer_events.none,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			{
				[classes.layout.display.outline]: isOutlined,
				[classes.borders.outline_color.gray[outlineHue]]: isOutlined,
				[classes.borders.outline_style.solid]: isOutlined,
				[classes.borders.outline_width[__DEFAULT_OUTLINE_WIDTH__]]: isOutlined,
				[classes.borders.outline_offset[0]]: isOutlined,
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]:
					variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]:
					variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_radius[radius]]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_color.transparent]: variant !== 'transparent' && variant !== 'unstyled',
				[classes.animation.pulse]: isAnimated
			}
		);
	}, [colorMode, isAnimated, isOutlined, radius, variant]);

	return classNames(rootClasses);
};

export default useDummyPushableOverlayClasses;
