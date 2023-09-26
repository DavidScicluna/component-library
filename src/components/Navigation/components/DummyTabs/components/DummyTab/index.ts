import * as commonConstants from './common/constants';
import { useDummyTabClasses, useDummyTabSizeConfig } from './common/hooks';
import * as commonKeys from './common/keys';
import type { DummyTabProps, DummyTabRef, DummyTabRenderProps } from './common/types';
import DummyTab from './DummyTab';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useDummyTabClasses, useDummyTabSizeConfig };

// Components
export { DummyTab };

// Component Types
export type { DummyTabProps, DummyTabRef, DummyTabRenderProps };
