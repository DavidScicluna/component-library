import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageBodyProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	VStackProps<Element>,
	'divider'
>;

export type MessageBodyRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;
