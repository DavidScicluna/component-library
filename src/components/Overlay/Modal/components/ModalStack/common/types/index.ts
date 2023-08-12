import type { ElementType } from 'react';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ModalStackProps<Element extends ElementType> = Omit<VStackProps<Element>, 'w' | 'h'> & {
	isDivisible?: boolean;
};

export type ModalStackRef<Element extends ElementType> = VStackRef<Element>;
