import type { PolymorphicChangeEvent, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type VisuallyHiddenElement = Extract<PolymorphicElementType, 'span' | 'input'>;

export type VisuallyHiddenChangeEvent<Element extends VisuallyHiddenElement> = PolymorphicChangeEvent<Element>;

export type VisuallyHiddenProps<Element extends VisuallyHiddenElement> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type VisuallyHiddenRef<Element extends VisuallyHiddenElement> = BoxRef<Element>;
