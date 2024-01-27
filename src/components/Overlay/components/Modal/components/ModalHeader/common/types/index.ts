import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type { GridProps } from '@components/Layout';

export type ModalHeaderRenderCancelProps = Pick<
	IconButtonProps<IconButtonDefaultElement>,
	'color' | 'colorMode' | 'onClick' | 'size' | 'variant'
>;

type ModalHeaderOtherProps<Element extends PolymorphicElementType> = Pick<GridProps<Element>, 'spacing'> & {
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderCancel?: (props: ModalHeaderRenderCancelProps) => ReactNode;
};

export type ModalHeaderProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, ModalHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type ModalHeaderRef<Element extends PolymorphicElementType> = BoxRef<Element>;
