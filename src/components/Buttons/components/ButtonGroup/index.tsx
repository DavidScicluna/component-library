import * as commonConstants from './common/constants';
import { useButtonGroupContext } from './common/hooks';
import * as commonKeys from './common/keys';
import type { ButtonGroupContext, ButtonGroupProps, ButtonGroupRef } from './common/types';
import ButtonGroup from './ButtonGroup';
import type { ButtonGroupItemProps, ButtonGroupItemRef } from './components';
import { ButtonGroupItem, keys as componentsKeys, useButtonGroupItemClasses } from './components';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useButtonGroupContext, useButtonGroupItemClasses };

// Components
export { ButtonGroup, ButtonGroupItem };

// Component Types
export type { ButtonGroupContext, ButtonGroupItemProps, ButtonGroupItemRef, ButtonGroupProps, ButtonGroupRef };
