import type { ThemeBreakpoint } from '.';

export type ResponsiveArrayValue<D> = [D?, D?, D?, D?, D?, D?];
export type ResponsiveObjectValue<D> = Record<ThemeBreakpoint, D>;
export type ResponsiveValue<D> = ResponsiveArrayValue<D> | ResponsiveObjectValue<D> | D;

export type ResponsiveValueProps<T, D extends keyof T> = {
	[K in D]: ResponsiveValue<T[K]>;
};
