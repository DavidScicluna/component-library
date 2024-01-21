import type { PolymorphicElementType } from '@common/types';

import type { CenterProps, CenterRef } from '@components/Layout';

export type ModalBodyProps<Element extends PolymorphicElementType> = CenterProps<Element>;

export type ModalBodyRef<Element extends PolymorphicElementType> = CenterRef<Element>;
