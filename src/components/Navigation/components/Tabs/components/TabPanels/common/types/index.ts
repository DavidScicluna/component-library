import type { ElementType } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';
import type { TabsProps } from '@components/Navigation/components/Tabs/common/types';

export type TabPanelsProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type TabPanelProps<Element extends ElementType> = BoxProps<Element, Pick<TabsProps<Element>, 'index'>>;

export type TabPanelsRef<Element extends ElementType> = BoxRef<Element>;