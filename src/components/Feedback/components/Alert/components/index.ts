import type {
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef
} from './AlertDescription';
import { AlertDescription, keys as alert_description_keys } from './AlertDescription';
import type { AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef } from './AlertIcon';
import { AlertIcon, keys as alert_icon_keys } from './AlertIcon';
import type { AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef } from './AlertLabel';
import { AlertLabel, keys as alert_label_keys } from './AlertLabel';

// Keys
export const keys = { ...alert_description_keys, ...alert_icon_keys, ...alert_label_keys };

// Components
export { AlertDescription, AlertIcon, AlertLabel };

// Component Types
export type {
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
};
