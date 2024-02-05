import type { PolymorphicElementType } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type VStackProps<Element extends PolymorphicElementType> = Omit<StackProps<Element>, 'direction'>;

export type VStackRef<Element extends PolymorphicElementType> = StackRef<Element>;
