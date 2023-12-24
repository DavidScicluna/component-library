import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue } from '@common/types';

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

export type ButtonSpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ButtonSpinnerOtherProps>,
	keyof BoxOtherProps
>;

export type ButtonSpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
