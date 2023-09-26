import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';
import type { HorizontalScrollAPIContext } from '@components/DataDisplay';
import type { TabsProps } from '@components/Navigation/components/Tabs';

export type TabListRenderProps<Element extends ElementType> = Pick<TabsProps<Element>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type TabListOtherProps<Element extends ElementType> = {
	renderLeft?: (props: TabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: TabListRenderProps<Element>) => ReactNode;
};

export type TabListProps<Element extends ElementType> = Omit<
	BoxProps<Element, TabListOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type TabListRef<Element extends ElementType> = BoxRef<Element>;

export type TabListContext = { scroll?: HorizontalScrollAPIContext };
