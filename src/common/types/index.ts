import { SystemStyleObject } from '@chakra-ui/react';

import { Color } from '../../theme/types';

// Utility Types
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

// Common Component Types
export type AppColor = Exclude<Color, 'transparent' | 'black' | 'white'>;
export type AppColors = AppColor[];

export type AppColorMode = 'light' | 'dark';
export type AppFullColorMode = AppColorMode | 'system';

export type CommonThemeProps = {
	color?: AppColor;
	colorMode?: AppColorMode;
};

// TODO: Remove
export type Style = SystemStyleObject;

export type Orientation = 'vertical' | 'horizontal';

export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Breakpoints = Breakpoint[];

export type ResponsiveArrayValue<D> = [D?, D?, D?, D?, D?, D?];
export type ResponsiveObjectValue<D> = Record<Breakpoint, D>;
export type ResponsiveValue<D> = ResponsiveArrayValue<D> | ResponsiveObjectValue<D> | D;

export type Space = number;
