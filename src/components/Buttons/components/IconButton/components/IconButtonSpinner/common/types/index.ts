import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

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

export type IconButtonSpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, IconButtonSpinnerOtherProps>,
	keyof BoxOtherProps
>;

export type IconButtonSpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
