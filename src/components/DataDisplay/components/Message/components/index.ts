import type { MessageActionsChildrenProps, MessageActionsProps, MessageActionsRef } from './MessageActions';
import { keys as messageActionsKeys, MessageActions } from './MessageActions';
import type { MessageBodyProps, MessageBodyRef } from './MessageBody';
import { constants as messageBodyConstants, keys as messageBodyKeys, MessageBody } from './MessageBody';
import type { MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef } from './MessageIcon';
import { keys as messageIconKeys, MessageIcon } from './MessageIcon';
import type { MessageStackProps, MessageStackRef } from './MessageStack';
import { keys as messageStackKeys, MessageStack } from './MessageStack';
import type {
	MessageSubtitleDefaultElement,
	MessageSubtitleElement,
	MessageSubtitleProps,
	MessageSubtitleRef
} from './MessageSubtitle';
import { keys as messageSubtitleKeys, MessageSubtitle } from './MessageSubtitle';
import type {
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef
} from './MessageTitle';
import { keys as messageTitleKeys, MessageTitle } from './MessageTitle';

// Constants
export const constants = { ...messageBodyConstants };

// Keys
export const keys = {
	...messageActionsKeys,
	...messageBodyKeys,
	...messageIconKeys,
	...messageStackKeys,
	...messageSubtitleKeys,
	...messageTitleKeys
};

// Components
export { MessageActions, MessageBody, MessageIcon, MessageStack, MessageSubtitle, MessageTitle };

// Component Types
export type {
	MessageActionsChildrenProps,
	MessageActionsProps,
	MessageActionsRef,
	MessageBodyProps,
	MessageBodyRef,
	MessageIconDefaultElement,
	MessageIconElement,
	MessageIconProps,
	MessageIconRef,
	MessageStackProps,
	MessageStackRef,
	MessageSubtitleDefaultElement,
	MessageSubtitleElement,
	MessageSubtitleProps,
	MessageSubtitleRef,
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef
};

// TODO: Go over all components folder and add index.ts with imports and exports
