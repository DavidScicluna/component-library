import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import dayjs from 'dayjs';

import Divider from '../../../../Divider';
import Input from '../../../Input';
import { useDatePickerContext } from '../../common/hooks';

import CalendarHeader from './components/CalendarHeader';
import CalendarWeekdays from './components/CalendarWeekdays';
import { CalendarProps } from './types';
import CalendarDays from './components/CalendarDays';

const Calendar: FC<CalendarProps> = ({ calendar }) => {
	const { color, colorMode, date, format, spacing } = useDatePickerContext();

	return (
		<VStack width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing}>
			<VStack width='100%' spacing={spacing}>
				<CalendarHeader calendar={calendar} />

				<CalendarWeekdays calendar={calendar} />

				<CalendarDays calendar={calendar} />
			</VStack>

			<Input
				color={color}
				colorMode={colorMode}
				autoComplete='off'
				isFullWidth
				isReadOnly
				value={dayjs(date).format(format)}
			/>
		</VStack>
	);
};

export default Calendar;
