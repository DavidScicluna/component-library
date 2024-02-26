import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsDefaultElement, DummyTabsProps } from '@components/Navigation';

export type DummyTabListRenderProps = Pick<DummyTabsProps<DummyTabsDefaultElement>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type DummyTabListOtherProps = {
	renderLeft?: (props: DummyTabListRenderProps) => ReactNode;
	renderRight?: (props: DummyTabListRenderProps) => ReactNode;
};

export type DummyTabListProps<Element extends PolymorphicElementType> = BoxProps<Element, DummyTabListOtherProps>;

export type DummyTabListRef<Element extends PolymorphicElementType> = BoxRef<Element>;
