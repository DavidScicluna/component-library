import type { TextDefaultElement, TextElement, TextProps, TextRef } from './components/Text';
import { constants as textConstants, Text, useGetTextClasses } from './components/Text';

// Constants
export const constants = {
	...textConstants
};

// Hooks
export { useGetTextClasses };

// Components
export { Text };

// Components Types
export type { TextDefaultElement, TextElement, TextProps, TextRef };
