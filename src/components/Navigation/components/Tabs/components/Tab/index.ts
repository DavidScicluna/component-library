import * as commonConstants from './common/constants';
import { useTabClasses, useTabSizeConfig } from './common/hooks';
import * as commonKeys from './common/keys';
import type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef, TabRenderProps } from './common/types';
import Tab from './Tab';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useTabClasses, useTabSizeConfig };

// Components
export { Tab };

// Component Types
export type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef, TabRenderProps };
