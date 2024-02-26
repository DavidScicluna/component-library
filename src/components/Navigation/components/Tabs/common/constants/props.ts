import { v4 as uuid } from 'uuid';

import type { TabsAlign, TabsDefaultElement, TabsOrientation, TabsSize } from '../types';

export const DEFAULT_TABS_AS: TabsDefaultElement = 'div';

export const DEFAULT_TABS_ALIGN: TabsAlign = 'start';

export const DEFAULT_TABS_ID = uuid();
export const DEFAULT_TABS_INDEX = 0;

export const DEFAULT_TABS_IS_DISABLED = false;
export const DEFAULT_TABS_IS_FITTED = false;

export const DEFAULT_TABS_ORIENTATION: TabsOrientation = 'bottom';

export const DEFAULT_TABS_SIZE: TabsSize = 'md';
