import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageStackProps<Element extends ElementType> = Omit<VStackProps<Element>, 'w' | 'h' | 'divider'>;

export type MessageStackRef<Element extends ElementType> = VStackRef<Element>;
