import type { PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

// import type { SpinnerProps, SpinnerRef } from '@components/Feedback';

export type IconButtonSpinnerVariant = 'puff' | 'tail_spin' | 'three_dots';

type IconButtonSpinnerOtherProps = {
	/**
	 * The type of spinner to render
	 *
	 * @default
	 */
	variant?: ResponsiveValue<IconButtonSpinnerVariant>;
};

export type IconButtonSpinnerProps<Element extends PolymorphicElementType> = BoxProps<
	Element,
	IconButtonSpinnerOtherProps
>;

export type IconButtonSpinnerRef<Element extends PolymorphicElementType> = BoxRef<Element>;
