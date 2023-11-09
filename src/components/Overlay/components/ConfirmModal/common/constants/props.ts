import { v4 as uuid } from 'uuid';

import type { ThemeSpacing } from '@common/types';

import type { ConfirmModalSize } from '../types';

export const __DEFAULT_CONFIRM_MODAL_ID__ = uuid();

export const __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__ = true;
export const __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__ = true;
export const __DEFAULT_CONFIRM_MODAL_IS_OPEN__ = false;
export const __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__ = true;

export const __DEFAULT_CONFIRM_MODAL_SIZE__: ConfirmModalSize = 'md';

export const __DEFAULT_CONFIRM_MODAL_SPACING__: ThemeSpacing = 4;
