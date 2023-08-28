import { sample } from 'lodash-es';

import colors from '@common/data/colors';
import {
	__KEY_LOCALSTORAGE_APP_COLOR__,
	__KEY_LOCALSTORAGE_APP_COLORMODE__,
	__KEY_LOCALSTORAGE_COLOR__,
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '@common/keys';
import type { ThemeAppColor, ThemeAppColorMode, ThemeColor } from '@common/types';

export const __DEFAULT_COLOR__: ThemeColor = (localStorage.getItem(__KEY_LOCALSTORAGE_COLOR__) || 'gray') as ThemeColor;
export const __DEFAULT_APP_COLOR__: ThemeAppColor = (localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLOR__) ||
	sample(colors) ||
	'blue') as ThemeAppColor;
export const __DEFAULT_APP_COLORMODE__: ThemeAppColorMode = (localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLORMODE__) ||
	'light') as ThemeAppColorMode;

export const __DEFAULT_HAS_FILLEDICON_LOADED__ = JSON.parse(
	sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__) || 'false'
) as boolean;
export const __DEFAULT_HAS_OUTLINEDICON_LOADED__ = JSON.parse(
	sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__) || 'false'
) as boolean;
export const __DEFAULT_HAS_TWOTONEICON_LOADED__ = JSON.parse(
	sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__) || 'false'
) as boolean;

export const __DEFAULT_CLASSNAME__ = '';

export const __DEFAULT_METHOD__ = () => undefined;
