import type {
	GradientClass,
	GradientFromMiddleToClass,
	PolymorphicElementType,
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
	position: GradientFromMiddleToClass;
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
	from?: ResponsiveValue<LinearGradientColor>;
	/**
	 * The middle color of the gradient
	 *
	 * @default color - 'gray'
	 * @default position - 50
	 */
	middle?: ResponsiveValue<LinearGradientColor>;
	/**
	 * The last color of the gradient
	 *
	 * @default color - 'gray'
	 * @default position - 100
	 */
	to?: ResponsiveValue<LinearGradientColor>;
};

export type LinearGradientProps<Element extends PolymorphicElementType> = BoxProps<Element, LinearGradientOtherProps>;

export type LinearGradientRef<Element extends PolymorphicElementType> = BoxRef<Element>;
