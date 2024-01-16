import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageBodyProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'divider'
>;

export type MessageBodyRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = VStackRef<Element>;
