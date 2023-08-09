import type {
	DividerDefaultElement,
	DividerElement,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
} from './components/Divider';
import {
	constants as dividerConstants,
	Divider,
	useGetDividerClasses,
	useGetDividerStyles
} from './components/Divider';
import type { HeadlineProps, HeadlineRef, HeadlineRenderProps } from './components/Headline';
import { Headline } from './components/Headline';
import type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant } from './components/Icon';
import { constants as iconConstants, Icon, useGetIconClasses } from './components/Icon';

// Constants
export const constants = { ...dividerConstants, ...iconConstants };

// Hooks
export { useGetDividerClasses, useGetDividerStyles, useGetIconClasses };

// Components
export { Divider, Headline, Icon };

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
	IconVariant
};
