import * as common_keys from './common/keys';
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
import { AlertDescription, AlertIcon, AlertLabel, keys as components_keys } from './components';

// Constants
export * as constants from './common/constants';

// Keys
export const keys = { ...common_keys, ...components_keys };

// Utils
export * as utils from './common/utils';

// Hooks
export * as hooks from './common/hooks';

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
