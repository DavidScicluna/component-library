import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabListRenderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	DummyTabsProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyTabListOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: DummyTabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: DummyTabListRenderProps<Element>) => ReactNode;
};

export type DummyTabListProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, DummyTabListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyTabListRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
