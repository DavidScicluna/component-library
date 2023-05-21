import { AppColor, AppColorMode } from '../../types';

export const color: AppColor = (localStorage.getItem('ds-cl-theme-color') || 'gray') as AppColor;
export const colorMode: AppColorMode = (localStorage.getItem('ds-cl-theme-color-mode') || 'light') as AppColorMode;

export const method = () => undefined;
