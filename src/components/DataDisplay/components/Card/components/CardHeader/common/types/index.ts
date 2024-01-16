import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { CardProps } from '@components/DataDisplay';
import type { GridProps } from '@components/Layout';

export type CardHeaderRenderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	CardProps<Element>,
	'color' | 'colorMode'
> & {
	w?: number;
	h?: number;
};

type CardHeaderOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	GridProps<Element>,
	'spacing'
> & {
	renderLeft?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps<Element>) => ReactNode;
	renderTitle: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	renderActions?: () => ReactNode;
};

export type CardHeaderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, CardHeaderOtherProps<Element>>,
	'children' | 'w' | 'h'
>;

export type CardHeaderRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
