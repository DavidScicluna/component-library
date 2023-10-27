import type { ElementType } from 'react';

import type { PickFrom, PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type CardBodyProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	PickFrom<keyof BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type CardBodyRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
