import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type CardFooterProps<Element extends PolymorphicElementType> = BoxProps<Element>;

export type CardFooterRef<Element extends PolymorphicElementType> = BoxRef<Element>;
