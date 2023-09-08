import * as commonConstants from './common/constants';
import { useGetTextClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { TextDefaultElement, TextElement, TextProps, TextRef } from './common/types';
import Text from './Text';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useGetTextClasses };

// Components
export { Text };

// Components Types
export type { TextDefaultElement, TextElement, TextProps, TextRef };
