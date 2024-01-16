import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type HStackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'direction'
>;

export type HStackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = StackRef<Element>;
