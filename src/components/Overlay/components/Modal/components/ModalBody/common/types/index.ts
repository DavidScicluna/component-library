import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { CenterProps, CenterRef } from '@components/Layout';

export type ModalBodyProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	CenterProps<Element>,
	'w' | 'h'
>;

export type ModalBodyRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = CenterRef<Element>;
