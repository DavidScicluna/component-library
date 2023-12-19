import type { ElementType } from 'react';

import type { PolymorphicChangeEvent } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type VisuallyHiddenDefaultElement = 'span';
export type VisuallyHiddenElement = Extract<ElementType, 'span'>;

export type VisuallyHiddenChangeEvent<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> =
	PolymorphicChangeEvent<Element>;

export type VisuallyHiddenProps<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type VisuallyHiddenRef<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = BoxRef<Element>;
