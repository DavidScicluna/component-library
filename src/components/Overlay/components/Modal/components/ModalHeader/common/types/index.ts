import type { ElementType, ReactNode } from 'react';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GridProps } from '@components/Layout';

interface ModalHeaderOtherProps<Element extends ElementType> extends Pick<GridProps<Element>, 'spacing'> {
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderCancel?: () => ReactNode;
}

export type ModalHeaderProps<Element extends ElementType> = Omit<
	BoxProps<Element, ModalHeaderOtherProps<Element>>,
	'children'
>;

export type ModalHeaderRef<Element extends ElementType> = BoxRef<Element>;
