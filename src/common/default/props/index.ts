import { localStorageColorKey, localStorageColorModeKey } from '../../keys';
import { AppColor, AppColorMode } from '../../types';

export const color: AppColor = (localStorage.getItem(localStorageColorKey) || 'gray') as AppColor;
export const colorMode: AppColorMode = (localStorage.getItem(localStorageColorModeKey) || 'light') as AppColorMode;

export const method = () => undefined;
