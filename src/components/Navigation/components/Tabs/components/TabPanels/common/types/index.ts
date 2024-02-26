import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type TabPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type TabPanelsProps<Element extends PolymorphicElementType> = BoxProps<Element>;

export type TabPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
