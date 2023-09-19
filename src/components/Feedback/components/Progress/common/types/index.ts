import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

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
};

type OmittedBoxProps = Exclude<keyof BoxOtherProps, 'w' | 'h'>;

export type ProgressProps<Element extends ElementType> = Omit<BoxProps<Element, ProgressOtherProps>, OmittedBoxProps>;

export type ProgressRef<Element extends ElementType> = BoxRef<Element>;

export type ProgressContext<Element extends ElementType> = Pick<
	ProgressProps<Element>,
	'color' | 'colorMode' | 'isIndeterminate' | 'max' | 'min' | 'radius'
>;
