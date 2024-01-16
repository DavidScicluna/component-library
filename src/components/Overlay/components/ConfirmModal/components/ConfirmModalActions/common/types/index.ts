import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { ButtonProps } from '@components/Buttons';
import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalActionsRenderCancelProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'onClick' | 'size' | 'variant'
>;
export type ConfirmModalActionsRenderActionProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type ConfirmModalActionsProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'children' | 'w' | 'h'
> & {
	renderCancel?: (props: ConfirmModalActionsRenderCancelProps) => ReactNode;
	renderAction?: (props: ConfirmModalActionsRenderActionProps) => ReactNode;
};

export type ConfirmModalActionsRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	VStackRef<Element>;
