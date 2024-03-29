import type { ComponentProps } from 'react';

import { v4 as uuid } from 'uuid';

import {
	DEFAULT_FORMS_IS_COMPACT,
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_FOCUSED,
	DEFAULT_FORMS_IS_OUTLINED,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_REQUIRED,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_SIZE
} from '@components/Forms/common/constants';

import type { RadioLabelPosition, RadioSize } from '../types';

export const DEFAULT_RADIO_ID = uuid();

export const DEFAULT_RADIO_IS_ACTIVE = false;
export const DEFAULT_RADIO_IS_CHECKED = false;
export const DEFAULT_RADIO_IS_CLICKABLE = true;
export const DEFAULT_RADIO_IS_COMPACT = DEFAULT_FORMS_IS_COMPACT;
export const DEFAULT_RADIO_IS_DISABLED = DEFAULT_FORMS_IS_DISABLED;
export const DEFAULT_RADIO_IS_ERROR = DEFAULT_FORMS_IS_ERROR;
export const DEFAULT_RADIO_IS_FOCUSED = DEFAULT_FORMS_IS_FOCUSED;
export const DEFAULT_RADIO_IS_OUTLINED = DEFAULT_FORMS_IS_OUTLINED;
export const DEFAULT_RADIO_IS_READONLY = DEFAULT_FORMS_IS_READONLY;
export const DEFAULT_RADIO_IS_REQUIRED = DEFAULT_FORMS_IS_REQUIRED;
export const DEFAULT_RADIO_IS_SUCCESS = DEFAULT_FORMS_IS_SUCCESS;
export const DEFAULT_RADIO_IS_WARNING = DEFAULT_FORMS_IS_WARNING;

export const DEFAULT_RADIO_LABEL_POSITION: RadioLabelPosition = 'right';

export const DEFAULT_RADIO_TYPE: ComponentProps<'input'>['type'] = 'radio';

export const DEFAULT_RADIO_SIZE: RadioSize = DEFAULT_FORMS_SIZE;
