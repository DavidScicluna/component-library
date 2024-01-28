import type { PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageStackProps<Element extends PolymorphicElementType> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type MessageStackRef<Element extends PolymorphicElementType> = VStackRef<Element>;
