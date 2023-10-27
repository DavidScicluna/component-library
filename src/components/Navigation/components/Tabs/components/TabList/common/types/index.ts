import type { ElementType, ReactNode } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsProps } from '@components/Navigation';

export type TabListRenderProps<Element extends ElementType> = Pick<TabsProps<Element>, 'color' | 'colorMode'> & {
	w?: number;
	h?: number;
};

type TabListOtherProps<Element extends ElementType> = {
	renderLeft?: (props: TabListRenderProps<Element>) => ReactNode;
	renderRight?: (props: TabListRenderProps<Element>) => ReactNode;
};

export type TabListProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	TabListOtherProps<Element>;

export type TabListRef<Element extends ElementType> = BoxRef<Element>;
