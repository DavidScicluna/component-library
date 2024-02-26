import type { ComponentProps } from 'react';

import { v4 as uuid } from 'uuid';

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

import type { EmailInputDefaultElement, EmailInputSize, EmailInputVariant } from '../types';

export const __DEFAULT_EMAIL_INPUT_AS__: EmailInputDefaultElement = 'input';

export const __DEFAULT_EMAIL_INPUT_ID__ = uuid();

export const __DEFAULT_EMAIL_INPUT_IS_COMPACT__ = __DEFAULT_FORMS_IS_COMPACT__;
export const __DEFAULT_EMAIL_INPUT_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_EMAIL_INPUT_IS_FULLWIDTH__ = __DEFAULT_FORMS_IS_FULLWIDTH__;
export const __DEFAULT_EMAIL_INPUT_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_EMAIL_INPUT_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_EMAIL_INPUT_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_EMAIL_INPUT_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_EMAIL_INPUT_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_EMAIL_INPUT_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_EMAIL_INPUT_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_EMAIL_INPUT_TYPE__: ComponentProps<'input'>['type'] = 'email';

export const __DEFAULT_EMAIL_INPUT_SIZE__: EmailInputSize = __DEFAULT_FORMS_SIZE__;

export const __DEFAULT_EMAIL_INPUT_VARIANT__: EmailInputVariant = __DEFAULT_FORMS_VARIANT__;
