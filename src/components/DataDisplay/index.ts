import type {
	DividerDefaultElement,
	DividerElement,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
} from './components/Divider';
import { constants as dividerConstants, Divider, useDividerClasses, useDividerStyles } from './components/Divider';
import type { HeadlineProps, HeadlineRef, HeadlineRenderProps } from './components/Headline';
import { Headline } from './components/Headline';
import type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant } from './components/Icon';
import { constants as iconConstants, Icon, useIconClasses } from './components/Icon';
import type {
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
} from './components/Message';
import {
	constants as messageConstants,
	Message,
	MessageActions,
	MessageBody,
	MessageIcon,
	MessageStack,
	MessageSubtitle,
	MessageTitle,
	useMessageClasses,
	useMessageContext
} from './components/Message';

// Constants
export const constants = { ...dividerConstants, ...messageConstants, ...iconConstants };

// Hooks
export { useDividerClasses, useDividerStyles, useIconClasses, useMessageClasses, useMessageContext };

// Components
export {
	Divider,
	Headline,
	Icon,
	Message,
	MessageActions,
	MessageBody,
	MessageIcon,
	MessageStack,
	MessageSubtitle,
	MessageTitle
};

// Component Types
export type {
	DividerDefaultElement,
	DividerElement,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant,
	HeadlineProps,
	HeadlineRef,
	HeadlineRenderProps,
	IconCategory,
	IconDefaultElement,
	IconElement,
	IconProps,
	IconRef,
	IconVariant,
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
