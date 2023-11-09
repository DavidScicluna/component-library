import type { ThemeAppColorMode, ThemeColorMode } from '@common/types';

export type ColorModeScriptProps = {
	initialColorMode: ThemeColorMode;
	onSetColorMode: (colorMode: ThemeAppColorMode) => void;
};
