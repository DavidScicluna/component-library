import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type ButtonGroupItemOtherProps = {
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

export type ButtonGroupItemProps<Element extends ElementType> = {
	children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode;
} & Omit<BoxProps<Element>, OmittedBoxProps> &
	ButtonGroupItemOtherProps;

export type ButtonGroupItemRef<Element extends ElementType> = BoxRef<Element>;
