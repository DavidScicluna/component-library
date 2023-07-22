import { sample } from 'lodash-es';

import colors from '@common/data/colors';
import {
	__KEY_LOCALSTORAGE_APP_COLOR__,
	__KEY_LOCALSTORAGE_APP_COLORMODE__,
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '@common/keys';
import { AppColor, AppColorMode, Duration, Ease, Space } from '@common/types/theme';

export const __DEFAULT_APP_COLOR__: AppColor = (localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLOR__) ||
	sample(colors) ||
	'blue') as AppColor;
export const __DEFAULT_APP_COLORMODE__: AppColorMode = (localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLORMODE__) ||
	'light') as AppColorMode;

export const __DEFAULT_HAS_FILLEDICON_LOADED__ = (sessionStorage.getItem(
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__
) || false) as boolean;
export const __DEFAULT_HAS_OUTLINEDICON_LOADED__ = (sessionStorage.getItem(
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__
) || false) as boolean;
export const __DEFAULT_HAS_TWOTONEICON_LOADED__ = (sessionStorage.getItem(
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
) || false) as boolean;

export const __DEFAULT_CLASSNAME__ = '';

export const __DEFAULT_DURATION__: Duration = 'normal';
export const __DEFAULT_EASING__: Ease = 'ease-in-out';

export const __DEFAULT_SPACING__: Space = 2;

export const __DEFAULT_METHOD__ = () => undefined;
