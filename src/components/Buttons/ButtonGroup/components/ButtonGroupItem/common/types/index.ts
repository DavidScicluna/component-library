import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type OmittedBoxProps = keyof BoxOtherProps | 'children';

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

export type ButtonGroupItemProps<Element extends ElementType> = Omit<
	BoxProps<Element, ButtonGroupItemOtherProps>,
	OmittedBoxProps
> & { children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode };

export type ButtonGroupItemRef<Element extends ElementType> = BoxRef<Element>;
