import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CardProps } from '@components/DataDisplay';
import type { GridProps } from '@components/Layout';

export type CardHeaderRenderProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	CardProps<Element>,
	'color' | 'colorMode'
> & {
	w?: number;
	h?: number;
};

type CardHeaderOtherProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	GridProps<Element>,
	'spacing'
> & {
	renderLeft?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderActions?: () => ReactNode;
};

export type CardHeaderProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	'children' | 'w' | 'h'
> &
	CardHeaderOtherProps<Element>;

export type CardHeaderRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
