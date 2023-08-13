import type { ElementType } from 'react';

import type { CenterProps, CenterRef } from '@components/Layout';

export type ModalBodyProps<Element extends ElementType> = Omit<CenterProps<Element>, 'w' | 'h'>;

export type ModalBodyRef<Element extends ElementType> = CenterRef<Element>;
