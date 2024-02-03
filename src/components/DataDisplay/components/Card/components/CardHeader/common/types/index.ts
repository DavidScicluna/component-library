import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CardDefaultElement, CardProps } from '@components/DataDisplay';
import type { GridProps } from '@components/Layout';

export type CardHeaderRenderProps = Pick<CardProps<CardDefaultElement>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type CardHeaderOtherProps = Pick<GridProps<PolymorphicDefaultElement>, 'spacing'> & {
	renderLeft?: (props: CardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps) => ReactNode;
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderActions?: () => ReactNode;
};

export type CardHeaderProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, CardHeaderOtherProps>,
	'children' | 'w' | 'h'
>;

export type CardHeaderRef<Element extends PolymorphicElementType> = BoxRef<Element>;
