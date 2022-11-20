import { FC, useContext } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import { compact } from 'lodash';

import { DatePickerContext } from '../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../types';
import CalendarDay from '../CalendarDay';
import { getVariant } from '../CalendarDay/common/utils';

import { CalendarDaysProps } from './types';

const CalendarDays: FC<CalendarDaysProps> = ({ calendar }) => {
	const { date: selectedDate, dayzed } = useContext<DatePickerContextType>(DatePickerContext);
	const { getDateProps } = dayzed || {};
	const { weeks = [], month, year } = calendar;

	return (
		<SimpleGrid width='100%' columns={7} alignItems='center' justifyContent='space-between' spacing={1}>
			{compact(weeks).map((week = [], weekIndex) =>
				compact(week).map((day) => (
					<CalendarDay
						{...(getDateProps ? getDateProps({ dateObj: day }) : {})}
						key={`ds-cl-DatePicker-${weekIndex}-${month}-${year}-${day.date.getDate()}`}
						variant={getVariant({ date: day.date, selectedDate, selectedMonth: month })}
					>
						{day.date.getDate()}
					</CalendarDay>
				))
			)}
		</SimpleGrid>
	);
};

export default CalendarDays;
