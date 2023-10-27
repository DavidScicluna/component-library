import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { StackProps, StackRef } from '@components/Layout';

export type HStackProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'direction'
>;

export type HStackRef<Element extends ElementType = PolymorphicDefaultElement> = StackRef<Element>;
