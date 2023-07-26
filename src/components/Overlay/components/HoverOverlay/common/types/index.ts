import { MouseEvent, ReactNode } from 'react';

import { PolymorphicDefaultElement } from '@common/types/polymorphic';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type HoverOverlayMouseEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

type HoverOverlayElement = PolymorphicDefaultElement;

export type HoverOverlayProps = Omit<BoxProps<HoverOverlayElement>, 'children'> & {
	/**
	 * This method will return a react component and will pass down a boolean value if the container is being hovered or not
	 *
	 * @param isHovering - boolean - Will return `true` if the container is hovered or not
	 * @returns ReactNode
	 */
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayRef = BoxRef<HoverOverlayElement>;
