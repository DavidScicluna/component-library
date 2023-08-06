import Divider from './components/Divider';
import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './components/Divider/common/constants';
import { useGetDividerClasses, useGetDividerStyles } from './components/Divider/common/hooks';
import type {
	DividerDefaultElement,
	DividerElement,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
} from './components/Divider/common/types';
import Headline from './components/Headline';
import type { HeadlineProps, HeadlineRef, HeadlineRenderProps } from './components/Headline/common/types';
import Icon from './components/Icon';
import { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ } from './components/Icon/common/constants';
import { useGetIconClasses } from './components/Icon/common/hooks';
import type { IconCategory, IconElement, IconProps, IconRef, IconVariant } from './components/Icon/common/types';

// Constants
export const constants = {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__,
	__DEFAULT_ICON_CATEGORY__,
	__DEFAULT_ICON_VARIANT__
};

// Hooks
export { useGetDividerClasses, useGetDividerStyles, useGetIconClasses };

// Components
export { Divider, Headline, Icon };

// Components Types
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
	IconElement,
	IconProps,
	IconRef,
	IconVariant
};
