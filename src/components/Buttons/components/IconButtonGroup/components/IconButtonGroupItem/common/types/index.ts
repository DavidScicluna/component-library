import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

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

export type IconButtonGroupItemProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, IconButtonGroupItemOtherProps>,
	keyof BoxOtherProps
>;

export type IconButtonGroupItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
