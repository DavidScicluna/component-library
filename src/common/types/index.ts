import type { CSSObject } from '@emotion/react';

import type { Breakpoint } from './theme';

export type Undefinable<T> = T | undefined; // Adds undefined to type

export type Nullable<T> = T | null; // Adds null to type

export type NonNullable<T> = T extends null | undefined ? never : T; // Remove null and undefined from type

export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> }; // Remove null and undefined from all keys type

export type PickFrom<T, K extends T> = {
	[P in keyof K]: P extends K ? P : never;
};

export type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};

export type Orientation = 'vertical' | 'horizontal';
export type Orientations = Orientation[];

export type ResponsiveArrayValue<D> = [D?, D?, D?, D?, D?, D?];
export type ResponsiveObjectValue<D> = Record<Breakpoint, D>;
export type ResponsiveValue<D> = ResponsiveArrayValue<D> | ResponsiveObjectValue<D> | D;

export type ClassName = string;

export type Style = CSSObject;
