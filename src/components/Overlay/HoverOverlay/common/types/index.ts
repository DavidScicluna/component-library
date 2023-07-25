import { MouseEvent, ReactNode } from 'react';

import { __DEFAULT_POLYMORPHIC_ELEMENT__ } from '@common/constants';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type HoverOverlayMouseEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

type HoverOverlayElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__;

export type HoverOverlayProps = Omit<BoxProps<HoverOverlayElementType>, 'children'> & {
	children: (isHovering: boolean) => ReactNode;
};

export type HoverOverlayRef = BoxRef<HoverOverlayElementType>;
