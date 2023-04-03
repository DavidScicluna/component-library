import { FC } from 'react';

import { SimpleGrid, Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import { short as weekdays } from '../../../../common/data/weekdays';
import { useDatePickerContext } from '../../../../common/hooks';

import { CalendarWeekdaysProps } from './types';

const CalendarWeekdays: FC<CalendarWeekdaysProps> = ({ calendar }) => {
	const theme = useTheme();

	const { colorMode } = useDatePickerContext();
	const { month, year } = calendar;

	return (
		<SimpleGrid width='100%' columns={7} alignItems='center' justifyContent='space-between' spacing={1}>
			{weekdays.map((weekday) => (
				<Text
					key={`ds-cl-DatePicker-${weekday}-${month}-${year}`}
					align='center'
					color={getColor({ theme, colorMode, type: 'text.primary' })}
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
