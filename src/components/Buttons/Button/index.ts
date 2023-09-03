import {
	__DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
	__DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from './common/constants';
import { useButtonClasses, useButtonContext, useButtonFontSize, useButtonSizeConfig } from './common/hooks';
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

// Constants
export const constants = {
	__DEFAULT_BUTTON_CAN_CLICK_ON_ENTER__,
	__DEFAULT_BUTTON_CAN_CLICK_ON_SPACE__,
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FOCUSABLE__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
};

// Hooks
export { useButtonClasses, useButtonContext, useButtonFontSize, useButtonSizeConfig };

// Components
export { Button };

// Component Types
export type {
	ButtonContext,
	ButtonDefaultElement,
	ButtonElement,
	ButtonMouseEvent,
	ButtonProps,
	ButtonRef,
	ButtonRenderProps,
	ButtonSize,
	ButtonVariant
};
