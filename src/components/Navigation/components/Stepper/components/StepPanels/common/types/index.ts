import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type StepPanelProps<Element extends PolymorphicElementType> = BoxProps<Element> & { index: number };

export type StepPanelsProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type StepPanelsRef<Element extends PolymorphicElementType> = BoxRef<Element>;
