import type { ElementType } from 'react';

import type {
	GradientClass,
	GradientFromMiddleToClass,
	PolymorphicDefaultElement,
	ResponsiveValue,
	ThemeAppColorMode,
	ThemeColor
} from '@common/types';
import type { ColorHueType } from '@common/utils';

import type { BoxProps, BoxRef } from '@components/Box';

export type LinearGradientColor = {
	color: ThemeColor;
	colorMode: ThemeAppColorMode;
	hueType?: ColorHueType;
	position: ResponsiveValue<GradientFromMiddleToClass>;
};

export type LinearGradientDirection = Exclude<GradientClass, 'none'>;
export type LinearGradientDirections = Array<LinearGradientDirection>;

type LinearGradientOtherProps = {
	/**
	 * The direction in which the linear gradient is directed
	 *
	 * @default 'r'
	 */
	direction?: ResponsiveValue<LinearGradientDirection>;
	/**
	 * The first color of the gradient
	 *
	 * @default color - 'gray'
	 * @default position - 0
	 */
	from?: LinearGradientColor;
	/**
	 * The middle color of the gradient
	 *
	 * @default color - 'gray'
	 * @default position - 50
	 */
	middle?: LinearGradientColor;
	/**
	 * The last color of the gradient
	 *
	 * @default color - 'gray'
	 * @default position - 100
	 */
	to?: LinearGradientColor;
};

export type LinearGradientProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	LinearGradientOtherProps
>;

export type LinearGradientRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
