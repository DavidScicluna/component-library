import type { DividerDefaultElement, DividerElement, DividerProps, DividerRef } from '@components/DataDisplay';

export type CardDividerDefaultElement = DividerDefaultElement;
export type CardDividerElement = DividerElement;

export type CardDividerProps<Element extends CardDividerElement> = Omit<DividerProps<Element>, 'orientation'>;

export type CardDividerRef<Element extends CardDividerElement> = DividerRef<Element>;
