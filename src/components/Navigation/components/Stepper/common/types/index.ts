import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type StepperDefaultElement = PolymorphicDefaultElement;
export type StepperElement = Extract<PolymorphicElementType, 'div'>;

export type StepperAlign = 'start' | 'center' | 'end';

export type StepperOrientation = 'top' | 'bottom' | 'left' | 'right';

export type StepperSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StepperVariant = 'dot' | 'icon';

type StepperOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The alignment of the stepper
	 *
	 * @default 'start'
	 */
	align?: ResponsiveValue<StepperAlign>;
	/**
	 * The index of the selected step
	 */
	index: ResponsiveValue<number>;
	/**
	 * The total number of the steps
	 */
	total: ResponsiveValue<number>;
	/**
	 * If true, the stepper will run consecutively
	 *
	 * @default false
	 */
	isConsecutively?: ResponsiveValue<boolean>;
	/**
	 * If true, the stepper will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, stepper will stretch to width of the parent element.
	 *
	 * @default false
	 */
	isFitted?: ResponsiveValue<boolean>;
	/**
	 * The orientation of the step list.
	 *
	 * @default 'horizontal'
	 */
	orientation?: ResponsiveValue<StepperOrientation>;
	/**
	 * Callback when the index changes.
	 */
	onChange: (index: number) => void;
	/**
	 * The size of the Stepper
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<StepperSize>;
	/**
	 * The variant of the Stepper
	 *
	 * @default 'dot'
	 */
	variant?: ResponsiveValue<StepperVariant>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type StepperProps<Element extends StepperElement> = BoxProps<Element, StepperOtherProps>;

export type StepperRef<Element extends StepperElement> = BoxRef<Element>;

type PickedStepperProps =
	| 'color'
	| 'colorMode'
	| 'align'
	| 'id'
	| 'index'
	| 'total'
	| 'isConsecutively'
	| 'isDisabled'
	| 'isFitted'
	| 'onChange'
	| 'orientation'
	| 'size'
	| 'spacing'
	| 'variant';
export type StepperContext<Element extends StepperElement> = Pick<StepperProps<Element>, PickedStepperProps>;
