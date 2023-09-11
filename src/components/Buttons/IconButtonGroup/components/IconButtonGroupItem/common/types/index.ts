import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type OmittedBoxProps = keyof BoxOtherProps | 'children';

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

export type IconButtonGroupItemProps<Element extends ElementType> = Omit<
	BoxProps<Element, IconButtonGroupItemOtherProps>,
	OmittedBoxProps
> & { children: (props: Pick<BoxProps<Element>, 'className'>) => ReactNode };

export type IconButtonGroupItemRef<Element extends ElementType> = BoxRef<Element>;
