import { v4 as uuid } from 'uuid';

import type { TabsAlign, TabsOrientation, TabsSize } from '../types';

export const __DEFAULT_TABS_ALIGN__: TabsAlign = 'start';

export const __DEFAULT_TABS_ID__ = uuid();
export const __DEFAULT_TABS_INDEX__ = 0;

export const __DEFAULT_TABS_IS_DISABLED__ = false;
export const __DEFAULT_TABS_IS_FITTED__ = false;

export const __DEFAULT_TABS_ORIENTATION__: TabsOrientation = 'bottom';

export const __DEFAULT_TABS_SIZE__: TabsSize = 'md';
