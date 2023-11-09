import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type IconButtonGroupItemOtherProps = {
	/**
	 * The index of the current item within the button group
	 */
	index: number;
	/**
	 * The total of items the button group has
	 */
	total: number;
};

type OmittedBoxProps = keyof BoxOtherProps | 'children';

export type IconButtonGroupItemProps<Element extends ElementType = PolymorphicDefaultElement> = {
	children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode;
} & Omit<BoxProps<Element>, OmittedBoxProps> &
	IconButtonGroupItemOtherProps;

export type IconButtonGroupItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
