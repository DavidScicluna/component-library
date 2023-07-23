import { ElementType } from 'react';

import type { StackProps, StackRef } from '@components/Layout/Stacks/Stack/common/types';

export type VStackProps<Element extends ElementType> = Omit<StackProps<Element>, 'direction'>;

export type VStackRef<Element extends ElementType> = StackRef<Element>;
