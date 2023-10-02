import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type CardStackProps<Element extends ElementType> = Omit<VStackProps<Element>, 'w' | 'h'>;

export type CardStackRef<Element extends ElementType> = VStackRef<Element>;
