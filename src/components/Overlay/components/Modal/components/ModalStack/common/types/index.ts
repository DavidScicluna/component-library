import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type ModalStackProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h'
> & {
	isDivisible?: boolean;
};

export type ModalStackRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;
