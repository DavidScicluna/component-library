import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ButtonGroupItemChildrenProps = Pick<BoxProps, 'className'>;

type ButtonGroupItemOtherProps = {
	children: (props: ButtonGroupItemChildrenProps) => ReactNode;
	/**
	 * The index of the current item within the button group
	 */
	index: number;
	/**
	 * The total of items the button group has
	 */
	total: number;
};

export type ButtonGroupItemProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ButtonGroupItemOtherProps>,
	keyof BoxOtherProps
>;

export type ButtonGroupItemRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
