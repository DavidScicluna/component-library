import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageBodyProps<Element extends PolymorphicElementType> = Omit<VStackProps<Element>, 'divider'>;

export type MessageBodyRef<Element extends PolymorphicElementType> = VStackRef<Element>;
