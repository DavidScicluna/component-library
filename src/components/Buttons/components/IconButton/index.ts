import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import * as common_keys from './common/keys';
import type {
	IconButtonContext,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonMouseEvent,
	IconButtonProps,
	IconButtonRef,
	IconButtonRenderProps,
	IconButtonSize,
	IconButtonVariant
} from './common/types';
import type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef,
	IconButtonSpinnerProps,
	IconButtonSpinnerRef
} from './components';
import {
	constants as components_constants,
	hooks as components_hooks,
	IconButtonIcon,
	IconButtonSpinner,
	keys as components_keys
} from './components';
import IconButton from './IconButton';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export const hooks = { ...common_hooks, components_hooks };

// Components
export { IconButton, IconButtonIcon, IconButtonSpinner };

// Component Types
export type {
	IconButtonContext,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef,
	IconButtonMouseEvent,
	IconButtonProps,
	IconButtonRef,
	IconButtonRenderProps,
	IconButtonSize,
	IconButtonSpinnerProps,
	IconButtonSpinnerRef,
	IconButtonVariant
};
