import { FC, useContext } from 'react';

import { HStack } from '@chakra-ui/react';

import { spacing as defaultSpacing } from '../../../../common/data/defaultPropValues';
import { DatePickerContext } from '../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../types';

import Month from './components/Month';
import Year from './components/Year';
import NextActions from './components/NextActions';
import PreviousActions from './components/PreviousActions';
import { CalendarHeaderProps } from './types';

const CalendarHeader: FC<CalendarHeaderProps> = ({ calendar }) => {
	const { spacing = defaultSpacing } = useContext<DatePickerContextType>(DatePickerContext);

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
