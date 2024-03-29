import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type VisuallyHiddenDefaultElement = 'span';
export type VisuallyHiddenElement = Extract<PolymorphicElementType, 'span' | 'input'>;

export type VisuallyHiddenProps<Element extends VisuallyHiddenElement> = BoxProps<Element>;

export type VisuallyHiddenRef<Element extends VisuallyHiddenElement> = BoxRef<Element>;
