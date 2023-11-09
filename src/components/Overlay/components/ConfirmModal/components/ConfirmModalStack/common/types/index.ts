import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ConfirmModalStackProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h' | 'divider'
>;

export type ConfirmModalStackRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;
