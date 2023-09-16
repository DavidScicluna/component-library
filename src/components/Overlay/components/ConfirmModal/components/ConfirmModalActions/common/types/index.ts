import type { ElementType, ReactNode } from 'react';

import type { ButtonProps } from '@components/Buttons/Button';
import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalActionsRenderCancelProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'onClick' | 'size' | 'variant'
>;
export type ConfirmModalActionsRenderActionProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type ConfirmModalActionsProps<Element extends ElementType> = Omit<
	VStackProps<Element>,
	'children' | 'w' | 'h'
> & {
	renderCancel?: (props: ConfirmModalActionsRenderCancelProps) => ReactNode;
	renderAction?: (props: ConfirmModalActionsRenderActionProps) => ReactNode;
};

export type ConfirmModalActionsRef<Element extends ElementType> = VStackRef<Element>;
