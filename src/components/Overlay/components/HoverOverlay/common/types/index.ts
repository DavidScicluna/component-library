import type { ElementType, ReactNode } from 'react';

import type { PolymorphicMouseEvent } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type HoverOverlayMouseEvent<Element extends ElementType> = PolymorphicMouseEvent<Element>;

export type HoverOverlayProps<Element extends ElementType> = Omit<BoxProps<Element>, 'children'> & {
	/**
	 * This method will return a react component and will pass down a boolean value if the container is being hovered or not
	 *
	 * @param isHovering - boolean - Will return `true` if the container is hovered or not
	 * @returns ReactNode
	 */
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayRef<Element extends ElementType> = BoxRef<Element>;
