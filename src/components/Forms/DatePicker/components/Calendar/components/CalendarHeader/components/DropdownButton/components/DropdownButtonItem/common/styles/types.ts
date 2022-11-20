import { Style } from '../../../../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../../../../theme/types';
import { DatePickerProps } from '../../../../../../../../../../types';
import { DropdownButtonItemProps } from '../../types';

export type DropdownButtonItemStyleProps = Pick<DatePickerProps, 'color' | 'colorMode'> & {
	theme: Theme;
} & Pick<DropdownButtonItemProps, 'isToday'>;

export type DropdownButtonItemStyleReturn = {
	item: Style;
	active: Style;
	disabled: Style;
};
