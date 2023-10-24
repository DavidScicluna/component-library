import type { MessageActionsChildrenProps, MessageActionsProps, MessageActionsRef } from './MessageActions';
import { keys as message_actions_keys, MessageActions } from './MessageActions';
import type { MessageBodyProps, MessageBodyRef } from './MessageBody';
import { constants as message_body_constants, keys as message_body_keys, MessageBody } from './MessageBody';
import type { MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef } from './MessageIcon';
import { keys as message_icon_keys, MessageIcon } from './MessageIcon';
import type { MessageStackProps, MessageStackRef } from './MessageStack';
import { keys as message_stack_keys, MessageStack } from './MessageStack';
import type {
	MessageSubtitleDefaultElement,
	MessageSubtitleElement,
	MessageSubtitleProps,
	MessageSubtitleRef
} from './MessageSubtitle';
import { keys as message_subtitle_keys, MessageSubtitle } from './MessageSubtitle';
import type {
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef
} from './MessageTitle';
import { keys as message_title_keys, MessageTitle } from './MessageTitle';

// Constants
export const constants = { ...message_body_constants };

// Keys
export const keys = {
	...message_actions_keys,
	...message_body_keys,
	...message_icon_keys,
	...message_stack_keys,
	...message_subtitle_keys,
	...message_title_keys
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
