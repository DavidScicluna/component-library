import * as commonConstants from './common/constants';
import { useAlertClasses, useAlertContext } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	AlertContext,
	AlertDuration,
	AlertProps,
	AlertRef,
	AlertRenderActionsProps,
	AlertRenderCloseProps,
	AlertStatus,
	AlertVariant
} from './common/types';
import * as commonUtils from './common/utils';
import Alert from './Alert';
import type {
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef,
	AlertIconDefaultElement,
	AlertIconElement,
	AlertIconProps,
	AlertIconRef,
	AlertLabelDefaultElement,
	AlertLabelElement,
	AlertLabelProps,
	AlertLabelRef
} from './components';
import { AlertDescription, AlertIcon, AlertLabel, keys as componentsKeys } from './components';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Utils
export const utils = { ...commonUtils };

// Hooks
export { useAlertClasses, useAlertContext };

// Components
export { Alert, AlertDescription, AlertIcon, AlertLabel };

// Component Types
export type {
	AlertContext,
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef,
	AlertDuration,
	AlertIconDefaultElement,
	AlertIconElement,
	AlertIconProps,
	AlertIconRef,
	AlertLabelDefaultElement,
	AlertLabelElement,
	AlertLabelProps,
	AlertLabelRef,
	AlertProps,
	AlertRef,
	AlertRenderActionsProps,
	AlertRenderCloseProps,
	AlertStatus,
	AlertVariant
};
