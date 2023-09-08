import { useBoxStyles } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	BoxHeight,
	BoxMaxHeight,
	BoxMaxWidth,
	BoxMinHeight,
	BoxMinWidth,
	BoxOtherProps,
	BoxProps,
	BoxRef,
	BoxWidth
} from './common/types';
import Box from './Box';

// TODO: Go to every index.ts and replace all imports with import * as

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useBoxStyles };

// Components
export { Box };

// Component Types
export type {
	BoxHeight,
	BoxMaxHeight,
	BoxMaxWidth,
	BoxMinHeight,
	BoxMinWidth,
	BoxOtherProps,
	BoxProps,
	BoxRef,
	BoxWidth
};
