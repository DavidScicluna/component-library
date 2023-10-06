import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import * as commonKeys from './common/keys';
import type { IconButtonGroupContext, IconButtonGroupProps, IconButtonGroupRef } from './common/types';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './components';
import { hooks as componentsHooks, IconButtonGroupItem, keys as componentsKeys } from './components';
import IconButtonGroup from './IconButtonGroup';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export const hooks = { ...commonHooks, ...componentsHooks };

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
