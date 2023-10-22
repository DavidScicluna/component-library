import type { ResizeClass } from '@common/types';

import { constants as forms_constants } from '@components/Forms';

import type { TextareaSize, TextareaVariant } from '../types';

const {
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_FOCUSED__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
} = forms_constants;

export const __DEFAULT_TEXTAREA_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_TEXTAREA_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_TEXTAREA_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_TEXTAREA_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_TEXTAREA_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_TEXTAREA_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_TEXTAREA_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_TEXTAREA_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_TEXTAREA_RESIZE__: ResizeClass = 'none';

export const __DEFAULT_TEXTAREA_SIZE__: TextareaSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_TEXTAREA_VARIANT__: TextareaVariant = __DEFAULT_FORMS_VARIANT__;
