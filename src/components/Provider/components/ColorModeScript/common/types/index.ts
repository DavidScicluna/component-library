import type { AppColorMode, ColorMode } from '@common/types/theme';

export type ColorModeScriptProps = {
	initialColorMode: ColorMode;
	onSetColorMode: (colorMode: AppColorMode) => void;
};
