import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

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

export type ProgressProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ProgressOtherProps>,
	OmittedBoxProps
>;

export type ProgressRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;

export type ProgressContext = Pick<
	ProgressProps,
	'color' | 'colorMode' | 'isIndeterminate' | 'max' | 'min' | 'radius' | 'variant'
>;
