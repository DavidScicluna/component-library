import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalBodyProps<Element extends ElementType> = Omit<VStackProps<Element>, 'divider'>;

export type ConfirmModalBodyRef<Element extends ElementType> = VStackRef<Element>;
