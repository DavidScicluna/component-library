import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalStackProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type ConfirmModalStackRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	VStackRef<Element>;
