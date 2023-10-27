import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterProps, CenterRef } from '@components/Layout';

export type ModalBodyProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	CenterProps<Element>,
	'w' | 'h'
>;

export type ModalBodyRef<Element extends ElementType = PolymorphicDefaultElement> = CenterRef<Element>;
