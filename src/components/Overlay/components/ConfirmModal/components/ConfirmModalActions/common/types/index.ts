import type { ElementType, ReactNode } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

// export type ConfirmModalActionsRenderProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;
export type ConfirmModalActionsRenderProps = any;
// export type ConfirmModalActionsRenderCancelProps = Pick<ButtonProps, 'onClick'> & ConfirmModalActionsRenderProps;
export type ConfirmModalActionsRenderCancelProps = any;

export type ConfirmModalActionsProps<Element extends ElementType> = Omit<VStackProps<Element>, 'children'> & {
	renderCancel?: (props: ConfirmModalActionsRenderCancelProps) => ReactNode;
	renderAction?: (props: ConfirmModalActionsRenderProps) => ReactNode;
};

export type ConfirmModalActionsRef<Element extends ElementType> = VStackRef<Element>;
