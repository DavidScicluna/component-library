import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsDefaultElement, TabsProps } from '@components/Navigation';

export type TabListRenderProps = {
	w?: number;
	h?: number;
} & Pick<TabsProps<TabsDefaultElement>, 'color' | 'colorMode'>;

type TabListOtherProps = {
	renderLeft?: (props: TabListRenderProps) => ReactNode;
	renderRight?: (props: TabListRenderProps) => ReactNode;
};

export type TabListProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, TabListOtherProps>,
	keyof BoxOtherProps
>;

export type TabListRef<Element extends PolymorphicElementType> = BoxRef<Element>;
