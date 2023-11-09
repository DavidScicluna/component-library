import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';

import type { DividerProps, DividerRef } from '@components/DataDisplay';

export type CardDividerDefaultElement = 'div';
export type CardDividerElement = PickFrom<ElementType, 'div'>;

export type CardDividerProps<Element extends CardDividerElement = CardDividerDefaultElement> = Omit<
	DividerProps<Element>,
	'orientation'
>;

export type CardDividerRef<Element extends CardDividerElement = CardDividerDefaultElement> = DividerRef<Element>;
