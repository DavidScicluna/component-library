import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

export type ModalFooterRenderCancelProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'onClick' | 'size' | 'variant'
>;
export type ModalFooterRenderActionProps = Pick<
	ButtonProps,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type ModalFooterProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'children' | 'w' | 'h'
> & {
	renderCancel?: (props: ModalFooterRenderCancelProps) => ReactNode;
	renderAction?: (props: ModalFooterRenderActionProps) => ReactNode;
};

export type ModalFooterRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = StackRef<Element>;
