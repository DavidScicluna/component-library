import { sample } from 'lodash-es';

import { appColors } from '@common/data';
import type { UseBooleanToggles } from '@common/hooks/useBoolean';
import {
	__KEY_LOCALSTORAGE_APP_COLOR__,
	__KEY_LOCALSTORAGE_APP_COLORMODE__,
	__KEY_LOCALSTORAGE_COLOR__,
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '@common/keys';
import type { ThemeAppColor, ThemeAppColorMode, ThemeColor } from '@common/types';

export const __DEFAULT_COLOR__: ThemeColor = (
	typeof window !== 'undefined' ? window.localStorage.getItem(__KEY_LOCALSTORAGE_COLOR__) || 'gray' : 'gray'
) as ThemeColor;
export const __DEFAULT_APP_COLOR__: ThemeAppColor = (
	typeof window !== 'undefined'
		? window.localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLOR__) || sample(appColors) || 'blue'
		: 'blue'
) as ThemeAppColor;
export const __DEFAULT_APP_COLORMODE__: ThemeAppColorMode = (
	typeof window !== 'undefined' ? window.localStorage.getItem(__KEY_LOCALSTORAGE_APP_COLORMODE__) || 'light' : 'light'
) as ThemeAppColorMode;

export const __DEFAULT_HAS_FILLEDICON_LOADED__ = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__) || 'false'
		: 'false'
) as boolean;
export const __DEFAULT_HAS_OUTLINEDICON_LOADED__ = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__) || 'false'
		: 'false'
) as boolean;
export const __DEFAULT_HAS_TWOTONEICON_LOADED__ = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__) || 'false'
		: 'false'
) as boolean;

export const __DEFAULT_CLASSNAME__ = '';

export const __DEFAULT_METHOD__ = () => undefined;
export const __DEFAULT_USE_BOOLEAN_TOGGLES__: UseBooleanToggles = { on: __DEFAULT_METHOD__, off: __DEFAULT_METHOD__ };
