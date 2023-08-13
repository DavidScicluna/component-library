import type { ElementType, ReactNode } from 'react';

import type { StackProps, StackRef } from '@components/Layout';

// export type ModalFooterRenderProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;
export type ModalFooterRenderProps = any;
// export type ModalFooterRenderCancelProps = Pick<ButtonProps, 'onClick'> & ModalFooterRenderProps;
export type ModalFooterRenderCancelProps = any;

export type ModalFooterProps<Element extends ElementType> = Omit<StackProps<Element>, 'children' | 'w' | 'h'> & {
	renderCancel?: (props: ModalFooterRenderCancelProps) => ReactNode;
	renderAction?: (props: ModalFooterRenderProps) => ReactNode;
};

export type ModalFooterRef<Element extends ElementType> = StackRef<Element>;
