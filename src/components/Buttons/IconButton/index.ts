import {
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from './common/constants';
import {
	useIconButtonClasses,
	useIconButtonContext,
	useIconButtonFontSize,
	useIconButtonSizeConfig
} from './common/hooks';
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
export const constants = {
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_ENTER__,
	__DEFAULT_ICON_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
};

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
