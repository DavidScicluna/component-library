import type { ThemeAppColor } from '@common/types';

export type ColorScriptProps = {
	initialColor: ThemeAppColor;
	onSetColor: (color: ThemeAppColor) => void;
};
