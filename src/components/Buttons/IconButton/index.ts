import * as commonConstants from './common/constants';
import {
	useIconButtonClasses,
	useIconButtonContext,
	useIconButtonFontSize,
	useIconButtonSizeConfig
} from './common/hooks';
import * as commonKeys from './common/keys';
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
import { IconButtonIcon, IconButtonSpinner } from './components';
import IconButton from './IconButton';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useIconButtonClasses, useIconButtonContext, useIconButtonFontSize, useIconButtonSizeConfig };

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
