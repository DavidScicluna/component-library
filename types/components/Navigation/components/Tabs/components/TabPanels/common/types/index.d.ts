import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsProps } from '@components/Navigation';
export type TabPanelsProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element>, keyof BoxOtherProps>;
export type TabPanelProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, Pick<TabsProps<Element>, 'index'>>;
export type TabPanelsRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
//# sourceMappingURL=index.d.ts.map