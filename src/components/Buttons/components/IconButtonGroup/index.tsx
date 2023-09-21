import * as commonConstants from './common/constants';
import { useIconButtonGroupContext } from './common/hooks';
import * as commonKeys from './common/keys';
import type { IconButtonGroupContext, IconButtonGroupProps, IconButtonGroupRef } from './common/types';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './components';
import { IconButtonGroupItem, keys as componentsKeys, useIconButtonGroupItemClasses } from './components';
import IconButtonGroup from './IconButtonGroup';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useIconButtonGroupContext, useIconButtonGroupItemClasses };

// Components
export { IconButtonGroup, IconButtonGroupItem };

// Component Types
export type {
	IconButtonGroupContext,
	IconButtonGroupItemProps,
	IconButtonGroupItemRef,
	IconButtonGroupProps,
	IconButtonGroupRef
};
