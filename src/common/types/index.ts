import { CSSObject } from '@chakra-ui/react';

// Utility Types
export type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from Type

export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> }; // Remove all null and undefined from Type

// Common Component Types
export type Style = CSSObject;

export type Orientation = 'vertical' | 'horizontal';

export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';
