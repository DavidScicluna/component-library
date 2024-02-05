import type { PolymorphicElementType } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type HStackProps<Element extends PolymorphicElementType> = Omit<StackProps<Element>, 'direction'>;

export type HStackRef<Element extends PolymorphicElementType> = StackRef<Element>;
