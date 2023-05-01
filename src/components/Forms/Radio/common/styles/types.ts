import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { RadioProps } from '../types';

type Picked =
	| 'color'
	| 'colorMode'
	| 'isChecked'
	| 'isError'
	| 'isWarning'
	| 'isSuccess'
	| 'isFullWidth'
	| 'size'
	| 'variant';

export type RadioStyleProps = {
	theme: Theme;
} & Pick<RadioProps, Picked>;

export type RadioStyleReturn = {
	group: Style;
	disabled: Style;
	readOnly: Style;
	checked: Style;
};
