import * as commonConstants from './common/constants';
import * as commonKeys from './common/keys';
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
	constants as componentsConstants,
	keys as componentsKeys,
	MessageActions,
	MessageBody,
	MessageIcon,
	MessageStack,
	MessageSubtitle,
	MessageTitle
} from './components';
import Message from './Message';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

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
