import type { ElementType, ReactNode } from 'react';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons/IconButton';
import type { GridProps } from '@components/Layout';

export type ModalHeaderRenderCancelProps = Pick<
	IconButtonProps,
	'color' | 'colorMode' | 'onClick' | 'size' | 'variant'
>;

type ModalHeaderOtherProps<Element extends ElementType> = Pick<GridProps<Element>, 'spacing'> & {
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderCancel?: (props: ModalHeaderRenderCancelProps) => ReactNode;
};

export type ModalHeaderProps<Element extends ElementType> = Omit<
	BoxProps<Element, ModalHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type ModalHeaderRef<Element extends ElementType> = BoxRef<Element>;
