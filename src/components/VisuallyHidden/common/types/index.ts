import type { PolymorphicChangeEvent, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type VisuallyHiddenDefaultElement = 'span';
export type VisuallyHiddenElement = Extract<PolymorphicElementType, 'span' | 'input'>;

export type VisuallyHiddenChangeEvent<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> =
	PolymorphicChangeEvent<Element>;

export type VisuallyHiddenProps<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type VisuallyHiddenRef<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = BoxRef<Element>;
