import { v4 as uuid } from 'uuid';

import type { ResizeClass } from '@common/types';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_FOCUSED__,
	__DEFAULT_FORMS_IS_FULLWIDTH__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
} from '@components/Forms/common/constants';

import type { TextareaDefaultElement, TextareaSize, TextareaVariant } from '../types';

export const __DEFAULT_TEXTAREA_AS__: TextareaDefaultElement = 'textarea';

export const __DEFAULT_TEXTAREA_ID__ = uuid();

export const __DEFAULT_TEXTAREA_IS_COMPACT__ = __DEFAULT_FORMS_IS_COMPACT__;
export const __DEFAULT_TEXTAREA_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_TEXTAREA_IS_FULLWIDTH__ = __DEFAULT_FORMS_IS_FULLWIDTH__;
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
