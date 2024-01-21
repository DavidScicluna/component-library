import type { ReactNode } from 'react';

import type { PolymorphicElementType, PolymorphicMouseEvent } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type HoverOverlayMouseEvent<Element extends PolymorphicElementType> = PolymorphicMouseEvent<Element>;

type HoverOverlayOtherProps = {
	/**
	 * This method will return a react component and will pass down a boolean value if the container is being hovered or not
	 *
	 * @param isHovering - boolean - Will return `true` if the container is hovered or not
	 * @returns ReactNode
	 */
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayProps<Element extends PolymorphicElementType> = BoxProps<Element, HoverOverlayOtherProps>;

export type HoverOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
