import { v4 as uuid } from 'uuid';

import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__
} from '@components/Forms/common/constants';

import type { FormControlDefaultElement, FormControlSize } from '../types';

export const __DEFAULT_FORM_CONTROL_AS__: FormControlDefaultElement = 'div';

export const __DEFAULT_FORM_CONTROL_ID__ = uuid();

export const __DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__ = true;

export const __DEFAULT_FORM_CONTROL_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_FORM_CONTROL_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_FORM_CONTROL_IS_FOCUSED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_FORM_CONTROL_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_FORM_CONTROL_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_FORM_CONTROL_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_FORM_CONTROL_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_FORM_CONTROL_SIZE__: FormControlSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_FORM_CONTROL_SPACING__: ThemeSpacing = 1;
