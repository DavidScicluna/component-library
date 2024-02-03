import type { PickFrom, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type OmittedBoxProps = PickFrom<keyof BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type CardBodyProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element>, OmittedBoxProps>;

export type CardBodyRef<Element extends PolymorphicElementType> = BoxRef<Element>;
