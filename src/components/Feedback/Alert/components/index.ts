import type {
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef
} from './AlertDescription';
import { AlertDescription, keys as alertDescriptionKeys } from './AlertDescription';
import type { AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef } from './AlertIcon';
import { AlertIcon, keys as alertIconKeys } from './AlertIcon';
import type { AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef } from './AlertLabel';
import { AlertLabel, keys as alertLabelKeys } from './AlertLabel';

// Keys
export const keys = { ...alertDescriptionKeys, ...alertIconKeys, ...alertLabelKeys };

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
