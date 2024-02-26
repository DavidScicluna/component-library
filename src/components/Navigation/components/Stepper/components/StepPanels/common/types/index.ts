import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type StepPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type StepPanelsProps<Element extends PolymorphicElementType> = BoxProps<Element>;

export type StepPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
