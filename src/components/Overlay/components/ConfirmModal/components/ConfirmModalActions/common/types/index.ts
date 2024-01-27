import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { ButtonDefaultElement, ButtonProps } from '@components/Buttons';
import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalActionsRenderCancelProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isFullWidth' | 'onClick' | 'size' | 'variant'
>;
export type ConfirmModalActionsRenderActionProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type ConfirmModalActionsProps<Element extends PolymorphicElementType> = {
	renderCancel?: (props: ConfirmModalActionsRenderCancelProps) => ReactNode;
	renderAction?: (props: ConfirmModalActionsRenderActionProps) => ReactNode;
} & Omit<VStackProps<Element>, 'children' | 'w' | 'h'>;

export type ConfirmModalActionsRef<Element extends PolymorphicElementType> = VStackRef<Element>;
