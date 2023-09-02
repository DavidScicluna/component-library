import type { MessageActionsChildrenProps, MessageActionsProps, MessageActionsRef } from './MessageActions';
import { MessageActions } from './MessageActions';
import type { MessageBodyProps, MessageBodyRef } from './MessageBody';
import { constants as messageBodyConstants, MessageBody } from './MessageBody';
import type { MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef } from './MessageIcon';
import { MessageIcon } from './MessageIcon';
import type { MessageStackProps, MessageStackRef } from './MessageStack';
import { MessageStack } from './MessageStack';
import type {
	MessageSubtitleDefaultElement,
	MessageSubtitleElement,
	MessageSubtitleProps,
	MessageSubtitleRef
} from './MessageSubtitle';
import { MessageSubtitle } from './MessageSubtitle';
import type {
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef
} from './MessageTitle';
import { MessageTitle } from './MessageTitle';

// Constants
export const constants = { ...messageBodyConstants };

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
