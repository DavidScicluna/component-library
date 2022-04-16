import { CSSObject } from '@chakra-ui/react';

// Utility Types
export type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from Type

// Component Types
export type Style = CSSObject;

export type Orientation = 'vertical' | 'horizontal';
