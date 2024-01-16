import type { PickFrom, PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type CardBodyProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	PickFrom<keyof BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type CardBodyRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
