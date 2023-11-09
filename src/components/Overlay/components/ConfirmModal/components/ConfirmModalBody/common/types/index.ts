import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalBodyProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type ConfirmModalBodyRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;
