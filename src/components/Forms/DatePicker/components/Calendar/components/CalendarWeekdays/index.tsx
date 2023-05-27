import { FC } from 'react';

import { SimpleGrid, Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../../common/hooks';
import { short as weekdays } from '../../../../common/data/weekdays';
import { useDatePickerContext } from '../../../../common/hooks';

import { CalendarWeekdaysProps } from './common/types';

const CalendarWeekdays: FC<CalendarWeekdaysProps> = ({ calendar }) => {
	const { colorMode } = useDatePickerContext();
	const { month, year } = calendar;

	const color = useGetColor({ colorMode, type: 'text.primary' });

	return (
		<SimpleGrid width='100%' columns={7} alignItems='center' justifyContent='space-between' spacing={1}>
			{weekdays.map((weekday) => (
				<Text
					key={`ds-cl-DatePicker-${weekday}-${month}-${year}`}
					align='center'
					color={color}
					fontWeight='semibold'
					fontSize='sm'
					textTransform='uppercase'
				>
					{weekday}
				</Text>
			))}
		</SimpleGrid>
	);
};

export default CalendarWeekdays;
