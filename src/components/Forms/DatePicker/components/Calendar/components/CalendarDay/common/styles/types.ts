import { Style } from '../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../theme/types';
import { DatePickerProps } from '../../../../../../types';
import { CalendarDayProps } from '../../types';

export type CalendarDayStyleProps = Pick<DatePickerProps, 'color' | 'colorMode'> & {
	theme: Theme;
} & Pick<CalendarDayProps, 'variant'>;

export type CalendarDayStyleReturn = {
	day: Style;
	active: Style;
	disabled: Style;
};
