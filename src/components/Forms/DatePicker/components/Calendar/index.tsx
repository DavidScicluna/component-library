import { FC, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import dayjs from 'dayjs';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	format as defaultFormat,
	spacing as defaultSpacing
} from '../../common/data/defaultPropValues';
import { DatePickerContext } from '../..';
import { DatePickerContext as DatePickerContextType } from '../../types';
import Divider from '../../../../Divider';
import Input from '../../../Input';

import CalendarHeader from './components/CalendarHeader';
import CalendarWeekdays from './components/CalendarWeekdays';
import { CalendarProps } from './types';
import CalendarDays from './components/CalendarDays';

const Calendar: FC<CalendarProps> = ({ calendar }) => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		date,
		format = defaultFormat,
		spacing = defaultSpacing
	} = useContext<DatePickerContextType>(DatePickerContext);

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
