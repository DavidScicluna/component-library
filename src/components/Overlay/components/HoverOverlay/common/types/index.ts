import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicMouseEvent } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type HoverOverlayMouseEvent<Element extends ElementType = PolymorphicDefaultElement> =
	PolymorphicMouseEvent<Element>;

type HoverOverlayOtherProps = {
	/**
	 * This method will return a react component and will pass down a boolean value if the container is being hovered or not
	 *
	 * @param isHovering - boolean - Will return `true` if the container is hovered or not
	 * @returns ReactNode
	 */
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, HoverOverlayOtherProps>,
	'children'
>;

export type HoverOverlayRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
