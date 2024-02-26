import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH, DEFAULT_OUTLINE_WIDTH, DEFAULT_RADIUS } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';
import { getColorHue } from '@common/utils';

import {
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
} from '../constants';
import type { DummyPushableOverlayProps } from '../types';

import useDummyPushableOverlayResponsiveValues from './useDummyPushableOverlayResponsiveValues';

type UseDummyPushableOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	DummyPushableOverlayProps<Element>,
	'colorMode' | 'isAnimated' | 'isOutlined' | 'radius' | 'variant'
>;
type UseDummyPushableOverlayClassesReturn = ClassName;

const useDummyPushableOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseDummyPushableOverlayClassesProps<Element>
): UseDummyPushableOverlayClassesReturn => {
	const { colorMode: DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE } = useAppTheme();

	const {
		colorMode = DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
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
				[classes.borders.outline_width[DEFAULT_OUTLINE_WIDTH]]: isOutlined,
				[classes.borders.outline_offset[0]]: isOutlined,
				[classes.borders.border_width[DEFAULT_BORDER_WIDTH]]:
					variant !== 'transparent' && variant !== 'unstyled',
				[classes.borders.border_style[DEFAULT_BORDER_STYLE]]:
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
