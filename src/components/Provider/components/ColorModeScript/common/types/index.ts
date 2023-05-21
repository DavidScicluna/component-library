import { AppColorMode, AppFullColorMode } from '../../../../../../common/types';

export type ColorModeScriptProps = {
	initialColorMode: AppFullColorMode;
	onSetColorMode: (props: AppColorMode) => void;
};
