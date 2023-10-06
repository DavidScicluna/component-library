import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import * as commonKeys from './common/keys';
import type { ButtonGroupContext, ButtonGroupProps, ButtonGroupRef } from './common/types';
import ButtonGroup from './ButtonGroup';
import type { ButtonGroupItemProps, ButtonGroupItemRef } from './components';
import { ButtonGroupItem, hooks as componentsHooks, keys as componentsKeys } from './components';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export const hooks = { ...commonHooks, ...componentsHooks };

// Components
export { ButtonGroup, ButtonGroupItem };

// Component Types
export type { ButtonGroupContext, ButtonGroupItemProps, ButtonGroupItemRef, ButtonGroupProps, ButtonGroupRef };
