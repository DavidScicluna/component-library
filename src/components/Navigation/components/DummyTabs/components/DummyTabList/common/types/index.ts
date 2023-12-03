import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabListRenderProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyTabsProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyTabListOtherProps<Element extends ElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: DummyTabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: DummyTabListRenderProps<Element>) => ReactNode;
};

export type DummyTabListProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, DummyTabListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyTabListRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
