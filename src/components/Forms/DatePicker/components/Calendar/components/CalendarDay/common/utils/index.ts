import dayjs from 'dayjs';
import memoize from 'memoizee';

import { Space } from '../../../../../../../../../theme/types';
import { CalendarDayVariant } from '../../types';

type GetSizeConfigReturn = {
	width: number; // In Pixels
	height: number; // In Pixels
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	offset: number; // In Pixels;
};

export const getSizeConfig = (): GetSizeConfigReturn => {
	return {
		width: 42,
		height: 42,
		border: 2,
		spacing: 2,
		offset: 4
	};
};

type GetAmountReturn = {
	hover: number;
	active: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		hover: 0.05,
		active: 0.1
	};
};

type GetVariantProps = {
	date: Date;
	selectedDate?: Date;
	selectedMonth: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

export const getVariant = memoize(({ date: d, selectedDate, selectedMonth }: GetVariantProps): CalendarDayVariant => {
	const selected = dayjs(selectedDate);
	const date = dayjs(d);
	const today = dayjs(new Date());

	if (date.month() !== selectedMonth) {
		return 'disabled';
	} else if (selected.isSame(date, 'day')) {
		return 'selected';
	} else if (today.isSame(date, 'day')) {
		return 'today';
	} else {
		return 'normal';
	}
});
