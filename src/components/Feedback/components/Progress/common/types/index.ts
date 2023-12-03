import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ProgressVariant = 'horizontal' | 'vertical';

type ProgressOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the progress will be indeterminate and the value, min & max props will be ignored
	 *
	 * @default false
	 */
	isIndeterminate?: ResponsiveValue<boolean>;
	/**
	 * The maximum value of the progress
	 *
	 * @default 100
	 */
	max?: ResponsiveValue<number>;
	/**
	 * The minimum value of the progress
	 *
	 * @default 0
	 */
	min?: ResponsiveValue<number>;
	/**
	 * The border radius of the progress container.
	 * @default 'full'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * Value of the progress
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
	/**
	 * The variant of the progress
	 *
	 * @default 'horizontal'
	 */
	variant?: ResponsiveValue<ProgressVariant>;
};

type OmittedBoxProps = Exclude<keyof BoxOtherProps, 'w' | 'h'>;

export type ProgressProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ProgressOtherProps>,
	OmittedBoxProps
>;

export type ProgressRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;

export type ProgressContext<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	ProgressProps<Element>,
	'color' | 'colorMode' | 'isIndeterminate' | 'max' | 'min' | 'radius' | 'variant'
>;
