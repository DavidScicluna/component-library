import type { ComponentProps } from 'react';

import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import { constants as forms_constants } from '@components/Forms';

import type { FileInputSize, FileInputVariant } from '../types';

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

export const __DEFAULT_FILE_INPUT_ACCEPT__ = 'image/*';

export const __DEFAULT_FILE_INPUT_DURATION__: ThemeDuration = 'ultra-slow';
export const __DEFAULT_FILE_INPUT_TIMEOUT__ =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_FILE_INPUT_DURATION__], 'ms') * 5;

export const __DEFAULT_FILE_INPUT_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_FILE_INPUT_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_FILE_INPUT_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_FILE_INPUT_IS_MULTIPLE__ = false;
export const __DEFAULT_FILE_INPUT_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_FILE_INPUT_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_FILE_INPUT_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_FILE_INPUT_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_FILE_INPUT_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_FILE_INPUT_TYPE__: ComponentProps<'input'>['type'] = 'file';

export const __DEFAULT_FILE_INPUT_SIZE__: FileInputSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_FILE_INPUT_VARIANT__: FileInputVariant = __DEFAULT_FORMS_VARIANT__;
