import type { ComponentProps } from 'react';

import {
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
} from '@components/Forms/common/constants';

import type { SearchInputSize, SearchInputVariant } from '../types';

export const __DEFAULT_SEARCH_INPUT_INITIAL_QUERY__ = '';

export const __DEFAULT_SEARCH_INPUT_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_SEARCH_INPUT_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_SEARCH_INPUT_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_SEARCH_INPUT_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_SEARCH_INPUT_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_SEARCH_INPUT_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_SEARCH_INPUT_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_SEARCH_INPUT_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_SEARCH_INPUT_TYPE__: ComponentProps<'input'>['type'] = 'search';

export const __DEFAULT_SEARCH_INPUT_SIZE__: SearchInputSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_SEARCH_INPUT_VARIANT__: SearchInputVariant = __DEFAULT_FORMS_VARIANT__;
