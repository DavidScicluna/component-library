import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './common/constants';
import { useGridClasses, useGridStyles } from './common/hooks';
import type { GridProps, GridRef } from './common/types';
import type { GridItemProps, GridItemRef } from './components/GridItem';
import { constants as gridItemConstants, GridItem, useGridItemClasses } from './components/GridItem';
import Grid from './Grid';

// Constants
export const constants = {
	...gridItemConstants,
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
};

// Hooks
export { useGridClasses, useGridItemClasses, useGridStyles };

// Components
export { Grid, GridItem };

// Component Types
export type { GridItemProps, GridItemRef, GridProps, GridRef };
