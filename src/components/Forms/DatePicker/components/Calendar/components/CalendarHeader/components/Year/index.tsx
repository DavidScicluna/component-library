import { FC, useContext } from 'react';

import { useConst } from '@chakra-ui/react';

import dayjs, { Dayjs } from 'dayjs';

import DropdownButton from '../DropdownButton';
import DropdownButtonItem from '../DropdownButton/components/DropdownButtonItem';
import years from '../../../../../../common/data/years';
import { DatePickerContext } from '../../../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../../../types';

import { YearProps } from './types';

const Year: FC<YearProps> = ({ calendar }) => {
	const { dayzed } = useContext<DatePickerContextType>(DatePickerContext);
	const { getBackProps, getForwardProps, calendars = [] } = dayzed || {};

	const { year } = calendar;

	const today = useConst<Dayjs>(dayjs(new Date()));

	return (
		<DropdownButton label={`${year}`}>
			{years.map((y, index) => (
				<DropdownButtonItem
					{...(year !== y
						? y > year && getForwardProps
							? getForwardProps({
									calendars,
									offset: (index - years.findIndex((y) => y === year)) * 12
							  })
							: y < year && getBackProps
							? getBackProps({ calendars, offset: (years.findIndex((y) => y === year) - index) * 12 })
							: {}
						: {})}
					key={y}
					isActive={y === year}
					isToday={y === today.year()}
				>
					{y}
				</DropdownButtonItem>
			))}
		</DropdownButton>
	);
};

export default Year;
