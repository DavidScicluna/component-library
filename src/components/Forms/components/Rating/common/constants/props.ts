import { v4 as uuid } from 'uuid';

import {
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__
} from '@components/Forms/common/constants';

import type { RatingDirection, RatingHighlightMode, RatingIcons, RatingSize } from '../types';

export const __DEFAULT_RATING_COUNT__ = 10;

export const __DEFAULT_RATING_DIRECTION__: RatingDirection = 'horizontal';

export const __DEFAULT_RATING_HIGHLIGHT_MODE__: RatingHighlightMode = 'single';

export const __DEFAULT_RATING_ICONS__: RatingIcons = { default: 'star_outline', active: 'star', hover: 'star' };

export const __DEFAULT_RATING_ID__ = uuid();

export const __DEFAULT_RATING_IS_DISABLED__ = __DEFAULT_FORMS_IS_DISABLED__;
export const __DEFAULT_RATING_IS_ERROR__ = __DEFAULT_FORMS_IS_ERROR__;
export const __DEFAULT_RATING_IS_READONLY__ = __DEFAULT_FORMS_IS_READONLY__;
export const __DEFAULT_RATING_IS_REQUIRED__ = __DEFAULT_FORMS_IS_REQUIRED__;
export const __DEFAULT_RATING_IS_SUCCESS__ = __DEFAULT_FORMS_IS_SUCCESS__;
export const __DEFAULT_RATING_IS_WARNING__ = __DEFAULT_FORMS_IS_WARNING__;

export const __DEFAULT_RATING_SIZE__: RatingSize = __DEFAULT_FORMS_SIZE__;
