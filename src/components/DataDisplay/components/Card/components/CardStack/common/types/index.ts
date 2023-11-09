import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type CardStackProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'w' | 'h'
>;

export type CardStackRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;
