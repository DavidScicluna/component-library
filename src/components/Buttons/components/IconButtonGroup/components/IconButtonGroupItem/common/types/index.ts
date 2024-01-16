import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type IconButtonGroupItemChildrenProps = Pick<BoxProps, 'className'>;

type IconButtonGroupItemOtherProps = {
	children: (props: IconButtonGroupItemChildrenProps) => ReactNode;
	/**
	 * The index of the current item within the button group
	 */
	index: number;
	/**
	 * The total of items the button group has
	 */
	total: number;
};

export type IconButtonGroupItemProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, IconButtonGroupItemOtherProps>,
	keyof BoxOtherProps
>;

export type IconButtonGroupItemRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	BoxRef<Element>;
