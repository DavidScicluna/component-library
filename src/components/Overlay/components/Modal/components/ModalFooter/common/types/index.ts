import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { ButtonDefaultElement, ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

export type ModalFooterRenderCancelProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isFullWidth' | 'onClick' | 'size' | 'variant'
>;
export type ModalFooterRenderActionProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type ModalFooterProps<Element extends PolymorphicElementType> = {
	renderCancel?: (props: ModalFooterRenderCancelProps) => ReactNode;
	renderAction?: (props: ModalFooterRenderActionProps) => ReactNode;
} & Omit<StackProps<Element>, 'children' | 'w' | 'h'>;

export type ModalFooterRef<Element extends PolymorphicElementType> = StackRef<Element>;
