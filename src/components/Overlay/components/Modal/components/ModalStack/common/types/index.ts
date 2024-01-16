import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ModalStackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h'
> & {
	isDivisible?: boolean;
};

export type ModalStackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = VStackRef<Element>;
