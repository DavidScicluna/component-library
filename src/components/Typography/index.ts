import type { TextDefaultElement, TextElement, TextProps, TextRef, TextThemeAppearanceProps } from './components/Text';
import { constants as text_constants, hooks as text_hooks, keys as text_keys, Text } from './components/Text';

// Constants
export const constants = { ...text_constants };

// Keys
export const keys = { ...text_keys };

// Hooks
export const hooks = { ...text_hooks };

// Components
export { Text };

// Components Types
export type { TextDefaultElement, TextElement, TextProps, TextRef, TextThemeAppearanceProps };
