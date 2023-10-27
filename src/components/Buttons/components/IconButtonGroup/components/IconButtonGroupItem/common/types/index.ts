import type { ElementType, ReactNode } from 'react';

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

export type IconButtonGroupItemProps<Element extends ElementType> = {
	children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode;
} & Omit<BoxProps<Element>, OmittedBoxProps> &
	IconButtonGroupItemOtherProps;

export type IconButtonGroupItemRef<Element extends ElementType> = BoxRef<Element>;
