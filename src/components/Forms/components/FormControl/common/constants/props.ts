import { v4 as uuid } from 'uuid';

import type { ThemeSpacing } from '@common/types';

import {
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_OUTLINED,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_REQUIRED,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_SIZE
} from '@components/Forms/common/constants';

import type { FormControlDefaultElement, FormControlSize } from '../types';

export const DEFAULT_FORM_CONTROL_AS: FormControlDefaultElement = 'div';

export const DEFAULT_FORM_CONTROL_ID = uuid();

export const DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL = true;

export const DEFAULT_FORM_CONTROL_IS_DISABLED = DEFAULT_FORMS_IS_DISABLED;
export const DEFAULT_FORM_CONTROL_IS_ERROR = DEFAULT_FORMS_IS_ERROR;
export const DEFAULT_FORM_CONTROL_IS_FOCUSED = DEFAULT_FORMS_IS_OUTLINED;
export const DEFAULT_FORM_CONTROL_IS_READONLY = DEFAULT_FORMS_IS_READONLY;
export const DEFAULT_FORM_CONTROL_IS_REQUIRED = DEFAULT_FORMS_IS_REQUIRED;
export const DEFAULT_FORM_CONTROL_IS_SUCCESS = DEFAULT_FORMS_IS_SUCCESS;
export const DEFAULT_FORM_CONTROL_IS_WARNING = DEFAULT_FORMS_IS_WARNING;

export const DEFAULT_FORM_CONTROL_SIZE: FormControlSize = DEFAULT_FORMS_SIZE;

export const DEFAULT_FORM_CONTROL_SPACING: ThemeSpacing = 1;
