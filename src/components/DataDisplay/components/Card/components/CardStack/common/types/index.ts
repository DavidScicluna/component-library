import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type CardStackProps<Element extends PolymorphicElementType> = Omit<VStackProps<Element>, 'w' | 'h'>;

export type CardStackRef<Element extends PolymorphicElementType> = VStackRef<Element>;
