import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons';
import type { GridProps } from '@components/Layout';

export type ModalHeaderRenderCancelProps = Pick<
	IconButtonProps,
	'color' | 'colorMode' | 'onClick' | 'size' | 'variant'
>;

type ModalHeaderOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	GridProps<Element>,
	'spacing'
> & {
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderCancel?: (props: ModalHeaderRenderCancelProps) => ReactNode;
};

export type ModalHeaderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ModalHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type ModalHeaderRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
