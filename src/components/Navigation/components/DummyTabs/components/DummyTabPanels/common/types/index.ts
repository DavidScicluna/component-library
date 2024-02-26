import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type DummyTabPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type DummyTabPanelsProps<Element extends PolymorphicElementType> = BoxProps<Element>;

export type DummyTabPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
