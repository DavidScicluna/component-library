import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DummyTabPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type DummyTabPanelsProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type DummyTabPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
