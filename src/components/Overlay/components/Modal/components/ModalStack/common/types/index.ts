import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ModalStackProps<Element extends PolymorphicElementType> = Omit<VStackProps<Element>, 'w' | 'h'> & {
	isDivisible?: boolean;
};

export type ModalStackRef<Element extends PolymorphicElementType> = VStackRef<Element>;
