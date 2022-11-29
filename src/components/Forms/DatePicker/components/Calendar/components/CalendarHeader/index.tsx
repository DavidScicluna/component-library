import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { useDatePickerContext } from '../../../../common/hooks';

import Month from './components/Month';
import Year from './components/Year';
import NextActions from './components/NextActions';
import PreviousActions from './components/PreviousActions';
import { CalendarHeaderProps } from './types';

const CalendarHeader: FC<CalendarHeaderProps> = ({ calendar }) => {
	const { spacing } = useDatePickerContext();

	return (
		<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={spacing}>
			<PreviousActions />

			<HStack spacing={0}>
				<Month calendar={calendar} />
				<Year calendar={calendar} />
			</HStack>

			<NextActions />
		</HStack>
	);
};

export default CalendarHeader;
