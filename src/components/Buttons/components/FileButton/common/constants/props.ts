import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

export const __DEFAULT_FILE_BUTTON_ACCEPT__ = 'image/*';

export const __DEFAULT_FILE_BUTTON_DURATION__: ThemeDuration = 'ultra-slow';
export const __DEFAULT_FILE_BUTTON_TIMEOUT__ =
	convertStringToNumber(theme.transitionDuration[__DEFAULT_FILE_BUTTON_DURATION__], 'ms') * 5;

export const __DEFAULT_FILE_BUTTON_IS_MULTIPLE__ = false;
