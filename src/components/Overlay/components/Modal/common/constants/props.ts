import { v4 as uuid } from 'uuid';

import type { TransitionKey } from '@components/Animation';

import type { ModalDefaultElement, ModalSize } from '../types';

export const DEFAULT_MODAL_AS: ModalDefaultElement = 'dialog';
export const DEFAULT_MODAL_ID = uuid();

export const DEFAULT_MODAL_CLOSE_ON_ESC = true;
export const DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK = true;
export const DEFAULT_MODAL_IS_OPEN = false;
export const DEFAULT_MODAL_HAS_BACKDROP = true;

export const DEFAULT_MODAL_SIZE: ModalSize = 'xl';

export const DEFAULT_MODAL_TRANSITION: TransitionKey = 'fade';
