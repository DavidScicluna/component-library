import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

export type CardBodyProps<Element extends ElementType> = Omit<
	BoxProps<Element>,
	PickFrom<keyof BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type CardBodyRef<Element extends ElementType> = BoxRef<Element>;
