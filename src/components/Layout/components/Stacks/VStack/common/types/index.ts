import { ElementType } from 'react';

import type { StackProps, StackRef } from '@components/Layout';

export type VStackProps<Element extends ElementType> = Omit<StackProps<Element>, 'direction'>;

export type VStackRef<Element extends ElementType> = StackRef<Element>;
