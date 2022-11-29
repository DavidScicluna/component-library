import { FC } from 'react';

import { useConst } from '@chakra-ui/react';

import dayjs, { Dayjs } from 'dayjs';

import DropdownButton from '../DropdownButton';
import DropdownButtonItem from '../DropdownButton/components/DropdownButtonItem';
import months from '../../../../../../common/data/months';
import { useDatePickerContext } from '../../../../../../common/hooks';

import { MonthProps } from './types';

const Month: FC<MonthProps> = ({ calendar }) => {
	const { dayzed } = useDatePickerContext();
	const { getBackProps, getForwardProps, calendars = [] } = dayzed || {};

	const { month, year } = calendar;

	const indexes = useConst<number[]>(months.map((_month, index) => index));
	const today = useConst<Dayjs>(dayjs(new Date()));

	return (
		<DropdownButton label={months[month]}>
			{months.map((m, index) => (
				<DropdownButtonItem
					{...(month !== index
						? index > month && getForwardProps
							? getForwardProps({ calendars, offset: index - indexes[month] })
							: index < month && getBackProps
							? getBackProps({ calendars, offset: indexes[month] - index })
							: {}
						: {})}
					key={m}
					isActive={index === month}
					isToday={today.month() === indexes[index] && year === today.year()}
				>
					{m}
				</DropdownButtonItem>
			))}
		</DropdownButton>
	);
};

export default Month;
