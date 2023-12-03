import type { ElementType, ReactNode } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsProps } from '@components/Navigation';
export type TabListRenderProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<TabsProps<Element>, 'color' | 'colorMode'> & {
    w?: number;
    h?: number;
};
type TabListOtherProps<Element extends ElementType = PolymorphicDefaultElement> = {
    renderLeft?: (props: TabListRenderProps<Element>) => ReactNode;
    renderRight?: (props: TabListRenderProps<Element>) => ReactNode;
};
export type TabListProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element, TabListOtherProps<Element>>, keyof BoxOtherProps>;
export type TabListRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map