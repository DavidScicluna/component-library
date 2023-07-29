import type { ElementType } from 'react';

import type { StackProps, StackRef } from '@components/Layout';

export type HStackProps<Element extends ElementType> = Omit<StackProps<Element>, 'direction'>;

export type HStackRef<Element extends ElementType> = StackRef<Element>;
