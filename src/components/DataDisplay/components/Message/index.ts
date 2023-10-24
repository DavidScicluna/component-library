import * as common_constants from './common/constants';
import * as common_keys from './common/keys';
import type { MessageContext, MessageProps, MessageRef, MessageVariant } from './common/types';
import type {
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
} from './components';
import {
	constants as components_constants,
	keys as components_keys,
	MessageActions,
	MessageBody,
	MessageIcon,
	MessageStack,
	MessageSubtitle,
	MessageTitle
} from './components';
import Message from './Message';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export * as hooks from './common/hooks';

// Components
export { Message, MessageActions, MessageBody, MessageIcon, MessageStack, MessageSubtitle, MessageTitle };

// Component Types
export type {
	MessageActionsChildrenProps,
	MessageActionsProps,
	MessageActionsRef,
	MessageBodyProps,
	MessageBodyRef,
	MessageContext,
	MessageIconDefaultElement,
	MessageIconElement,
	MessageIconProps,
	MessageIconRef,
	MessageProps,
	MessageRef,
	MessageStackProps,
	MessageStackRef,
	MessageSubtitleDefaultElement,
	MessageSubtitleElement,
	MessageSubtitleProps,
	MessageSubtitleRef,
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef,
	MessageVariant
};
