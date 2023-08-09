import {
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__
} from './common/constants';
import { __KEYS_COLLAPSE__, __KEYS_COLLAPSE_X_AXIS__, __KEYS_COLLAPSE_Y_AXIS__ } from './common/keys';
import type { CollapseAxis, CollapseProps, CollapseRef, CollapseXAxisProps, CollapseYAxisProps } from './common/types';
import Collapse from './Collapse';

// Constants
export const constants = {
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__
};

// Keys
export const keys = { __KEYS_COLLAPSE__, __KEYS_COLLAPSE_X_AXIS__, __KEYS_COLLAPSE_Y_AXIS__ };

// Components
export { Collapse };

// Component Types
export type { CollapseAxis, CollapseProps, CollapseRef, CollapseXAxisProps, CollapseYAxisProps };
