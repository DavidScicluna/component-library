import { v4 as uuid } from 'uuid';

import type { ThemeSpacing } from '@common/types';

import type { FormControlSize } from '../types';

export const __DEFAULT_FORM_CONTROL_ID__ = uuid();

export const __DEFAULT_FORM_CONTROL_IS_DISABLED__ = false;
export const __DEFAULT_FORM_CONTROL_IS_ERROR__ = false;
export const __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = false;
export const __DEFAULT_FORM_CONTROL_IS_READONLY__ = false;
export const __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = false;
export const __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = false;
export const __DEFAULT_FORM_CONTROL_IS_WARNING__ = false;

export const __DEFAULT_FORM_CONTROL_SIZE__: FormControlSize = 'md';

export const __DEFAULT_FORM_CONTROL_SPACING__: ThemeSpacing = 1;
