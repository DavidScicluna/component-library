import { v4 as uuid } from 'uuid';

import {
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_REQUIRED,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_SIZE
} from '@components/Forms/common/constants';

import type { RatingDirection, RatingHighlightMode, RatingIcons, RatingSize } from '../types';

export const DEFAULT_RATING_COUNT = 10;

export const DEFAULT_RATING_DIRECTION: RatingDirection = 'horizontal';

export const DEFAULT_RATING_HIGHLIGHT_MODE: RatingHighlightMode = 'single';

export const DEFAULT_RATING_ICONS: RatingIcons = { default: 'star_outline', active: 'star', hover: 'star' };

export const DEFAULT_RATING_ID = uuid();

export const DEFAULT_RATING_IS_DISABLED = DEFAULT_FORMS_IS_DISABLED;
export const DEFAULT_RATING_IS_ERROR = DEFAULT_FORMS_IS_ERROR;
export const DEFAULT_RATING_IS_READONLY = DEFAULT_FORMS_IS_READONLY;
export const DEFAULT_RATING_IS_REQUIRED = DEFAULT_FORMS_IS_REQUIRED;
export const DEFAULT_RATING_IS_SUCCESS = DEFAULT_FORMS_IS_SUCCESS;
export const DEFAULT_RATING_IS_WARNING = DEFAULT_FORMS_IS_WARNING;

export const DEFAULT_RATING_SIZE: RatingSize = DEFAULT_FORMS_SIZE;
