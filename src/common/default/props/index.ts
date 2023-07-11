import {
	__KEY_LOCALSTORAGE_COLOR__,
	__KEY_LOCALSTORAGE_COLORMODE__,
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '../../keys';
import { AppColor, AppColorMode } from '../../types/theme';

export const __DEFAULT_APP_COLOR__: AppColor = (localStorage.getItem(__KEY_LOCALSTORAGE_COLOR__) || 'blue') as AppColor;
export const __DEFAULT_APP_COLORMODE__: AppColorMode = (localStorage.getItem(__KEY_LOCALSTORAGE_COLORMODE__) ||
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

export const __DEFAULT_METHOD__ = () => undefined;
