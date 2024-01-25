import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type TabPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type TabPanelsProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type TabPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
