import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type VisuallyHiddenDefaultElement = 'span';
export type VisuallyHiddenElement = PickFrom<ElementType, 'span' | 'input'>;

export type VisuallyHiddenProps<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type VisuallyHiddenRef<Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement> = BoxRef<Element>;
