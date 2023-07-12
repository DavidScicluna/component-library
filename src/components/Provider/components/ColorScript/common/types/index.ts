import type { AppColor } from '../../../../../../common/types/theme';

export type ColorScriptProps = {
	initialColor: AppColor;
	onSetColor: (color: AppColor) => void;
};
