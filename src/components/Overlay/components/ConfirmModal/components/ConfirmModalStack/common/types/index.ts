import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalStackProps<Element extends PolymorphicElementType> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type ConfirmModalStackRef<Element extends PolymorphicElementType> = VStackRef<Element>;
