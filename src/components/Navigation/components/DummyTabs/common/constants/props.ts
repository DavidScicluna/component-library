import { v4 as uuid } from 'uuid';

import type { DummyTabsAlign, DummyTabsDefaultElement, DummyTabsOrientation, DummyTabsSize } from '../types';

export const DEFAULT_DUMMY_TABS_AS: DummyTabsDefaultElement = 'div';

export const DEFAULT_DUMMY_TABS_ALIGN: DummyTabsAlign = 'start';

export const DEFAULT_DUMMY_TABS_ID = uuid();
export const DEFAULT_DUMMY_TABS_INDEX = 0;

export const DEFAULT_DUMMY_TABS_IS_ANIMATED = true;
export const DEFAULT_DUMMY_TABS_IS_FITTED = false;

export const DEFAULT_DUMMY_TABS_ORIENTATION: DummyTabsOrientation = 'bottom';

export const DEFAULT_DUMMY_TABS_SIZE: DummyTabsSize = 'md';
