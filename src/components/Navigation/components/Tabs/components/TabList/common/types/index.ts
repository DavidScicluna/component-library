import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsProps } from '@components/Navigation';

export type TabListRenderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	TabsProps<Element>,
	'color' | 'colorMode'
> & {
	w?: number;
	h?: number;
};

type TabListOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = {
	renderLeft?: (props: TabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: TabListRenderProps<Element>) => ReactNode;
};

export type TabListProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, TabListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type TabListRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
