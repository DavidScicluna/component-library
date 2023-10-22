import type { ComponentProps } from 'react';

import { constants as forms_constants } from '@components/Forms';

import type { InputSize, InputVariant } from '../types';

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

export const __DEFAULT_INPUT_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_INPUT_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_INPUT_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_INPUT_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_INPUT_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_INPUT_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_INPUT_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_INPUT_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_INPUT_TYPE__: ComponentProps<'input'>['type'] = 'text';

export const __DEFAULT_INPUT_SIZE__: InputSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_INPUT_VARIANT__: InputVariant = __DEFAULT_FORMS_VARIANT__;
