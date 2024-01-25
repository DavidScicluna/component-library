import { v4 as uuid } from 'uuid';

import type { DummyTabsAlign, DummyTabsDefaultElement, DummyTabsOrientation, DummyTabsSize } from '../types';

export const __DEFAULT_DUMMY_TABS_AS__: DummyTabsDefaultElement = 'div';

export const __DEFAULT_DUMMY_TABS_ALIGN__: DummyTabsAlign = 'start';

export const __DEFAULT_DUMMY_TABS_ID__ = uuid();
export const __DEFAULT_DUMMY_TABS_INDEX__ = 0;

export const __DEFAULT_DUMMY_TABS_IS_ANIMATED__ = true;
export const __DEFAULT_DUMMY_TABS_IS_FITTED__ = false;

export const __DEFAULT_DUMMY_TABS_ORIENTATION__: DummyTabsOrientation = 'bottom';

export const __DEFAULT_DUMMY_TABS_SIZE__: DummyTabsSize = 'md';
