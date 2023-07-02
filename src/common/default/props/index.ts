import { localStorageColorKey, localStorageColorModeKey } from '../../keys';
import { AppColor, AppColorMode } from '../../types';

export const color: AppColor = (globalThis?.localStorage?.getItem(localStorageColorKey) || 'gray') as AppColor;
export const colorMode: AppColorMode = (globalThis?.localStorage?.getItem(localStorageColorModeKey) ||
	'light') as AppColorMode;

export const method = () => undefined;
