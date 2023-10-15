import { v4 as uuid } from 'uuid';

import type { ThemeDuration } from '@common/types';

import type { ModalSize } from '../types';

export const __DEFAULT_MODAL_DURATION__: ThemeDuration = 'slow';

export const __DEFAULT_MODAL_ID__ = uuid();

export const __DEFAULT_MODAL_CLOSE_ON_ESC__ = true;
export const __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__ = true;
export const __DEFAULT_MODAL_IS_OPEN__ = false;
export const __DEFAULT_MODAL_HAS_BACKDROP__ = true;

export const __DEFAULT_MODAL_SIZE__: ModalSize = 'xl';
