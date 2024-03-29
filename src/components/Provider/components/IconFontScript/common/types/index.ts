import type { UseBooleanToggles } from '@common/hooks/useBoolean';

export type IconFontScriptProps = {
	onSetHasFilledIconLoaded: UseBooleanToggles;
	onSetHasOutlinedIconLoaded: UseBooleanToggles;
	onSetHasTwoToneIconLoaded: UseBooleanToggles;
};
