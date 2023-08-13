import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalStackProps<Element extends ElementType> = Omit<VStackProps<Element>, 'w' | 'h' | 'divider'>;

export type ConfirmModalStackRef<Element extends ElementType> = VStackRef<Element>;
