import { sample } from 'lodash-es';

import { appColors } from '@common/data';
import type { UseBooleanToggles } from '@common/hooks/useBoolean';
import {
	KEY_LOCALSTORAGE_APP_COLOR,
	KEY_LOCALSTORAGE_APP_COLORMODE,
	KEY_LOCALSTORAGE_COLOR,
	KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED,
	KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED,
	KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED
} from '@common/keys';
import type { ThemeAppColor, ThemeAppColorMode, ThemeColor } from '@common/types';

export const DEFAULT_COLOR: ThemeColor = (
	typeof window !== 'undefined' ? window.localStorage.getItem(KEY_LOCALSTORAGE_COLOR) || 'gray' : 'gray'
) as ThemeColor;
export const DEFAULT_APP_COLOR: ThemeAppColor = (
	typeof window !== 'undefined'
		? window.localStorage.getItem(KEY_LOCALSTORAGE_APP_COLOR) || sample(appColors) || 'blue'
		: 'blue'
) as ThemeAppColor;
export const DEFAULT_APP_COLORMODE: ThemeAppColorMode = (
	typeof window !== 'undefined' ? window.localStorage.getItem(KEY_LOCALSTORAGE_APP_COLORMODE) || 'light' : 'light'
) as ThemeAppColorMode;

export const DEFAULT_HAS_FILLEDICON_LOADED = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED) || 'false'
		: 'false'
) as boolean;
export const DEFAULT_HAS_OUTLINEDICON_LOADED = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED) || 'false'
		: 'false'
) as boolean;
export const DEFAULT_HAS_TWOTONEICON_LOADED = JSON.parse(
	typeof window !== 'undefined'
		? window.sessionStorage.getItem(KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED) || 'false'
		: 'false'
) as boolean;

export const DEFAULT_CLASSNAME = '';

export const DEFAULT_METHOD = () => undefined;
export const DEFAULT_USE_BOOLEAN_TOGGLES: UseBooleanToggles = {
	on: DEFAULT_METHOD,
	off: DEFAULT_METHOD,
	toggle: DEFAULT_METHOD
};
