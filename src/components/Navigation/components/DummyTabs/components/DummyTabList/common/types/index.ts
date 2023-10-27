import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabListRenderProps<Element extends ElementType> = Pick<
	DummyTabsProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyTabListOtherProps<Element extends ElementType> = {
	renderLeft?: (props: DummyTabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: DummyTabListRenderProps<Element>) => ReactNode;
};

export type DummyTabListProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	DummyTabListOtherProps<Element>;

export type DummyTabListRef<Element extends ElementType> = BoxRef<Element>;
