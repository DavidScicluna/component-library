import type { TextDefaultElement, TextElement, TextProps, TextRef, TextThemeAppearanceProps } from './components/Text';
import { constants as textConstants, hooks as textHooks, keys as textKeys, Text } from './components/Text';

// Constants
export const constants = { ...textConstants };

// Keys
export const keys = { ...textKeys };

// Hooks
export const hooks = { ...textHooks };

// Components
export { Text };

// Components Types
export type { TextDefaultElement, TextElement, TextProps, TextRef, TextThemeAppearanceProps };
