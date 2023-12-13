import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

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

export type ButtonGroupItemProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ButtonGroupItemOtherProps>,
	keyof BoxOtherProps
>;

export type ButtonGroupItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
