import { SystemStyleObject } from '@chakra-ui/react';

import { Color } from '../../theme/types';

// Utility Types
export type Undefinable<T> = T | undefined; // Adds undefined to type

export type Nullable<T> = T | null; // Adds null to type

export type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from type

export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> }; // Remove null and undefined from all keys type

export type PickFrom<T, K extends T> = {
	[P in keyof K]: P extends K ? P : never;
};

// Common Hook Types
export type UseBooleanToggles = Record<'on' | 'off' | 'toggle', () => void>;

// Common Component Types
export type AppColor = Exclude<Color, 'transparent' | 'black' | 'white'>;
export type AppColors = AppColor[];

export type Style = SystemStyleObject;

export type Orientation = 'vertical' | 'horizontal';

export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';
