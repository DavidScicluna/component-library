import type { ElementType } from 'react';

import type {
	GradientClass,
	GradientFromMiddleToClass,
	ResponsiveValue,
	ThemeAppColor,
	ThemeAppColorMode
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type LinearGradientColor = Partial<Record<'from' | 'middle' | 'to', ThemeAppColor>>;

export type LinearGradientDirection = Exclude<GradientClass, 'none'>;
export type LinearGradientDirections = Array<LinearGradientDirection>;

type LinearGradientOtherProps = {
	color?: LinearGradientColor;
	colorMode?: ThemeAppColorMode;
	/**
	 * The direction in which the linear gradient is directed
	 *
	 * @default 'r'
	 */
	direction?: ResponsiveValue<LinearGradientDirection>;
	/**
	 * The position of the first gradient color
	 *
	 * @default 0
	 */
	fromPos?: ResponsiveValue<GradientFromMiddleToClass>;
	/**
	 * The position of the middle gradient color
	 *
	 * @default 50
	 */
	middlePos?: ResponsiveValue<GradientFromMiddleToClass>;
	/**
	 * The position of the last gradient color
	 *
	 * @default 100
	 */
	toPos?: ResponsiveValue<GradientFromMiddleToClass>;
};

export type LinearGradientProps<Element extends ElementType> = BoxProps<Element, LinearGradientOtherProps>;

export type LinearGradientRef<Element extends ElementType> = BoxRef<Element>;
