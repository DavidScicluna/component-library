import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type ButtonGroupItemOtherProps<Element extends ElementType = PolymorphicDefaultElement> = {
	children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode;
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
	BoxProps<Element, ButtonGroupItemOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type ButtonGroupItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
