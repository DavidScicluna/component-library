import type { ComponentProps } from 'react';

import { v4 as uuid } from 'uuid';

import {
	DEFAULT_FORMS_IS_COMPACT,
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_FOCUSED,
	DEFAULT_FORMS_IS_FULLWIDTH,
	DEFAULT_FORMS_IS_OUTLINED,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_REQUIRED,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_SIZE,
	DEFAULT_FORMS_VARIANT
} from '@components/Forms/common/constants';

import type { PasswordInputDefaultElement, PasswordInputSize, PasswordInputVariant } from '../types';

export const DEFAULT_PASSWORD_INPUT_AS: PasswordInputDefaultElement = 'input';

export const DEFAULT_PASSWORD_INPUT_ID = uuid();

export const DEFAULT_PASSWORD_INPUT_IS_COMPACT = DEFAULT_FORMS_IS_COMPACT;
export const DEFAULT_PASSWORD_INPUT_IS_DISABLED = DEFAULT_FORMS_IS_DISABLED;
export const DEFAULT_PASSWORD_INPUT_IS_FULLWIDTH = DEFAULT_FORMS_IS_FULLWIDTH;
export const DEFAULT_PASSWORD_INPUT_IS_ERROR = DEFAULT_FORMS_IS_ERROR;
export const DEFAULT_PASSWORD_INPUT_IS_FOCUSED = DEFAULT_FORMS_IS_FOCUSED;
export const DEFAULT_PASSWORD_INPUT_IS_OUTLINED = DEFAULT_FORMS_IS_OUTLINED;
export const DEFAULT_PASSWORD_INPUT_IS_READONLY = DEFAULT_FORMS_IS_READONLY;
export const DEFAULT_PASSWORD_INPUT_IS_REQUIRED = DEFAULT_FORMS_IS_REQUIRED;
export const DEFAULT_PASSWORD_INPUT_IS_SUCCESS = DEFAULT_FORMS_IS_SUCCESS;
export const DEFAULT_PASSWORD_INPUT_IS_WARNING = DEFAULT_FORMS_IS_WARNING;

export const DEFAULT_PASSWORD_INPUT_TYPE: ComponentProps<'input'>['type'] = 'password';

export const DEFAULT_PASSWORD_INPUT_SIZE: PasswordInputSize = DEFAULT_FORMS_SIZE;

export const DEFAULT_PASSWORD_INPUT_VARIANT: PasswordInputVariant = DEFAULT_FORMS_VARIANT;
