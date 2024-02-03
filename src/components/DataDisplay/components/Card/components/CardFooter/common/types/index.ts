import type { PickFrom, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type OmittedBoxProps = PickFrom<keyof BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type CardFooterProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element>, OmittedBoxProps>;

export type CardFooterRef<Element extends PolymorphicElementType> = BoxRef<Element>;
