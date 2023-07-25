import { MouseEvent, ReactNode } from 'react';

import { __DEFAULT_POLYMORPHIC_ELEMENT__ } from '@common/constants';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type HoverOverlayMouseEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

type HoverOverlayElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__;

export type HoverOverlayProps = Omit<BoxProps<HoverOverlayElementType>, 'children'> & {
	/**
	 * This method will return a react component and will pass down a boolean value if the container is being hovered or not
	 *
	 * @param isHovering - boolean - Will return `true` if the container is hovered or not
	 * @returns ReactNode
	 */
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayRef = BoxRef<HoverOverlayElementType>;
