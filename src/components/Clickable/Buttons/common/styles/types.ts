import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CommonButtonProps } from '../types';

export type ButtonStyleProps = Pick<CommonButtonProps, 'isCompact' | 'isFullWidth' | 'size'> & {
	theme: Theme;
	isLoading?: boolean;
};

export type ButtonStyleReturn = {
	button: Style;
	active: Style;
	disabled: Style;
};
