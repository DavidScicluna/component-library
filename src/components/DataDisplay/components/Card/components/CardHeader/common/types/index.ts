import type { ElementType, ReactNode } from 'react';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CardProps } from '@components/DataDisplay/components/Card';
import type { GridProps } from '@components/Layout';

export type CardHeaderRenderProps<Element extends ElementType> = Pick<CardProps<Element>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type CardHeaderOtherProps<Element extends ElementType> = Pick<GridProps<Element>, 'spacing'> & {
	renderLeft?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderActions?: () => ReactNode;
};

export type CardHeaderProps<Element extends ElementType> = Omit<
	BoxProps<Element, CardHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type CardHeaderRef<Element extends ElementType> = BoxRef<Element>;
