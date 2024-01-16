import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type VStackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'direction'
>;

export type VStackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = StackRef<Element>;
