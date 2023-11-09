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

import type { SwitchLabelPosition, SwitchSize } from '../types';

export const __DEFAULT_SWITCH_HAS_IO_LABEL__ = true;

export const __DEFAULT_SWITCH_ID__ = uuid();

export const __DEFAULT_SWITCH_IS_ACTIVE__ = false;
export const __DEFAULT_SWITCH_IS_CHECKED__ = false;
export const __DEFAULT_SWITCH_IS_CLICKABLE__ = true;
export const __DEFAULT_SWITCH_IS_COMPACT__ = __DEFAULT_FORMS_IS_COMPACT__;
export const __DEFAULT_SWITCH_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_SWITCH_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_SWITCH_IS_FOCUSED__ = __DEFAULT_FORMS_IS_FOCUSED__;
export const __DEFAULT_SWITCH_IS_OUTLINED__ = __DEFAULT_FORMS_IS_OUTLINED__;
export const __DEFAULT_SWITCH_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_SWITCH_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_SWITCH_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_SWITCH_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_SWITCH_LABEL_POSITION__: SwitchLabelPosition = 'right';

export const __DEFAULT_SWITCH_TYPE__: ComponentProps<'input'>['type'] = 'switch';

export const __DEFAULT_SWITCH_SIZE__: SwitchSize = __DEFAULT_FORMS_SIZE__;
