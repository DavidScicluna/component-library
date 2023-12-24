import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import * as common_keys from './common/keys';
import type {
	ButtonContext,
	ButtonDefaultElement,
	ButtonElement,
	ButtonMouseEvent,
	ButtonProps,
	ButtonRef,
	ButtonRenderProps,
	ButtonSize,
	ButtonVariant
} from './common/types';
import Button from './Button';
import type {
	ButtonIconDefaultElement,
	ButtonIconElement,
	ButtonIconProps,
	ButtonIconRef,
	ButtonSpinnerProps,
	ButtonSpinnerRef
} from './components';
import {
	ButtonIcon,
	ButtonSpinner,
	constants as components_constants,
	hooks as components_hooks,
	keys as components_keys
} from './components';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export const hooks = { ...common_hooks, components_hooks };

// Components
export { Button, ButtonIcon, ButtonSpinner };

// Component Types
export type {
	ButtonContext,
	ButtonDefaultElement,
	ButtonElement,
	ButtonIconDefaultElement,
	ButtonIconElement,
	ButtonIconProps,
	ButtonIconRef,
	ButtonMouseEvent,
	ButtonProps,
	ButtonRef,
	ButtonRenderProps,
	ButtonSize,
	ButtonSpinnerProps,
	ButtonSpinnerRef,
	ButtonVariant
};
