import type { ComponentProps } from 'react';

import { v4 as uuid } from 'uuid';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_FOCUSED__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__
} from '@components/Forms/common/constants';

import type { CheckboxLabelPosition, CheckboxSize } from '../types';

export const __DEFAULT_CHECKBOX_ID__ = uuid();

export const __DEFAULT_CHECKBOX_IS_ACTIVE__ = false;
export const __DEFAULT_CHECKBOX_IS_CHECKED__ = false;
export const __DEFAULT_CHECKBOX_IS_CLICKABLE__ = true;
export const __DEFAULT_CHECKBOX_IS_COMPACT__ = __DEFAULT_FORMS_IS_COMPACT__;
export const __DEFAULT_CHECKBOX_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_CHECKBOX_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_CHECKBOX_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_CHECKBOX_IS_INDETERMINATE__ = false;
export const __DEFAULT_CHECKBOX_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_CHECKBOX_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_CHECKBOX_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_CHECKBOX_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_CHECKBOX_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_CHECKBOX_LABEL_POSITION__: CheckboxLabelPosition = 'right';

export const __DEFAULT_CHECKBOX_TYPE__: ComponentProps<'input'>['type'] = 'checkbox';

export const __DEFAULT_CHECKBOX_SIZE__: CheckboxSize = __DEFAULT_FORMS_SIZE__;
