import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalBodyProps<Element extends PolymorphicElementType> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type ConfirmModalBodyRef<Element extends PolymorphicElementType> = VStackRef<Element>;
