import { Style } from '../../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../../theme/types';
import { DatePickerProps } from '../../../../../../../../common/types';

export type DropdownButtonStyleProps = Pick<DatePickerProps, 'color' | 'colorMode'> & {
	theme: Theme;
	isActive: boolean;
};

export type DropdownButtonStyleReturn = {
	button: Style;
};
