import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type CardStackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h'
>;

export type CardStackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = VStackRef<Element>;
