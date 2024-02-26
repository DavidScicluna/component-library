import type { PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type ButtonSpinnerVariant = 'puff' | 'tail_spin' | 'three_dots';

type ButtonSpinnerOtherProps = {
	/**
	 * The type of spinner to render
	 *
	 * @default
	 */
	variant?: ResponsiveValue<ButtonSpinnerVariant>;
};

export type ButtonSpinnerProps<Element extends PolymorphicElementType> = BoxProps<Element, ButtonSpinnerOtherProps>;

export type ButtonSpinnerRef<Element extends PolymorphicElementType> = BoxRef<Element>;
