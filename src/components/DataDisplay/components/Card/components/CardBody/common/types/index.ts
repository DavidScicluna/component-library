import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type CardBodyProps<Element extends PolymorphicElementType> = BoxProps<Element>;

export type CardBodyRef<Element extends PolymorphicElementType> = BoxRef<Element>;
