import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type VStackProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'direction'
>;

export type VStackRef<Element extends ElementType = PolymorphicDefaultElement> = StackRef<Element>;
