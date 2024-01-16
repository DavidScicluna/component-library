import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

// import type { SpinnerProps, SpinnerRef } from '@components/Feedback';

export type ButtonSpinnerVariant = 'puff' | 'tail_spin' | 'three_dots';

type ButtonSpinnerOtherProps = {
	/**
	 * The type of spinner to render
	 *
	 * @default
	 */
	variant?: ResponsiveValue<ButtonSpinnerVariant>;
};

export type ButtonSpinnerProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ButtonSpinnerOtherProps>,
	keyof BoxOtherProps
>;

export type ButtonSpinnerRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
