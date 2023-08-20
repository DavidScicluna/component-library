import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageBodyProps<Element extends ElementType> = Omit<VStackProps<Element>, 'divider'>;

export type MessageBodyRef<Element extends ElementType> = VStackRef<Element>;
