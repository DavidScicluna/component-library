import { ElementType, MouseEvent, ReactNode } from 'react';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type HoverOverlayMouseEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

export type HoverOverlayProps<Element extends ElementType> = BoxProps<Element> & {
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayRef<Element extends ElementType> = BoxRef<Element>;
