import { v4 as uuid } from 'uuid';

import type { ThemeSpacing } from '@common/types';

import type { ConfirmModalDefaultElement, ConfirmModalSize } from '../types';

export const DEFAULT_CONFIRM_MODAL_AS: ConfirmModalDefaultElement = 'dialog';
export const DEFAULT_CONFIRM_MODAL_ID = uuid();

export const DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC = true;
export const DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK = true;
export const DEFAULT_CONFIRM_MODAL_IS_OPEN = false;
export const DEFAULT_CONFIRM_MODAL_HAS_BACKDROP = true;

export const DEFAULT_CONFIRM_MODAL_SIZE: ConfirmModalSize = 'md';

export const DEFAULT_CONFIRM_MODAL_SPACING: ThemeSpacing = 4;
