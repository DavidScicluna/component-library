import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CheckboxProps } from '../../types';

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

export type CheckboxStyleProps = {
	theme: Theme;
} & Pick<CheckboxProps, Picked>;

export type CheckboxStyleReturn = {
	group: Style;
	disabled: Style;
	readOnly: Style;
	checkbox: Style;
	checked: Style;
};
