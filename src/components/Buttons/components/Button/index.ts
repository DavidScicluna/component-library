import * as commonConstants from './common/constants';
import * as commonKeys from './common/keys';
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
import { ButtonIcon, ButtonSpinner, keys as componentsKeys } from './components';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export * as hooks from './common/hooks';

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
