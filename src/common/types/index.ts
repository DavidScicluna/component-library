import { SystemStyleObject } from '@chakra-ui/react';

// Utility Types
export type Undefinable<T> = T | undefined; // Adds undefined to type

export type Nullable<T> = T | null; // Adds null to type

export type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from type

export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> }; // Remove null and undefined from all keys type

export type PickEnum<T, K extends T> = {
	[P in keyof K]: P extends K ? P : never;
};

// Common Component Types
export type Style = SystemStyleObject;

export type Orientation = 'vertical' | 'horizontal';

export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';
