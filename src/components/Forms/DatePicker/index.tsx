import { FC, createContext, useState } from 'react';

import { useColorMode, useDisclosure, HStack, Text } from '@chakra-ui/react';

import dayjs from 'dayjs';
import { useDayzed } from 'dayzed';
import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../common/hooks';
import Modal from '../../Overlay/Modal';
import ModalStack from '../../Overlay/Modal/components/ModalStack';
import ModalHeader from '../../Overlay/Modal/components/ModalHeader';
import IconButton from '../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import ModalBody from '../../Overlay/Modal/components/ModalBody';
import Divider from '../../Divider';
import ModalFooter from '../../Overlay/Modal/components/ModalFooter';
import Button from '../../Clickable/Buttons/OriginalButton';
import Fade from '../../Transitions/Fade';

import Calendar from './components/Calendar';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	date as defaultDate,
	format as defaultFormat,
	spacing as defaultSpacing
	// variant as defaultVariant
} from './common/data/defaultPropValues';
import { DatePickerContext as DatePickerContextType, DatePickerProps, DatePickerDate } from './types';

export const DatePickerContext = createContext<DatePickerContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	date: defaultDate,
	format: defaultFormat,
	spacing: defaultSpacing
});

const DatePicker: FC<DatePickerProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const { isOpen: isDatePickerOpen, onOpen: onDatePickerOpen, onClose: onDatePickerClose } = useDisclosure();

	const {
		color = defaultColor,
		colorMode = colorModeHook,
		renderButton,
		onSetDate,
		format = defaultFormat,
		value,
		minDate,
		maxDate,
		monthsToDisplay = 1,
		spacing = defaultSpacing,
		// variant = defaultVariant,
		...rest
	} = props;

	const [date, setDate] = useState<DatePickerDate>();
	const dateDebounced = useDebounce<DatePickerDate>(date);

	const handleReset = (): void => {
		if (value) {
			setDate(value);
		}
	};

	const handleOpen = (): void => {
		handleReset();

		onDatePickerOpen();
	};

	const handleSetDate = (): void => {
		if (dateDebounced) {
			onSetDate(dateDebounced);
		}

		onDatePickerClose();
	};

	const dayzed = useDayzed({
		...rest,
		showOutsideDays: true,
		minDate,
		maxDate,
		monthsToDisplay,
		selected: dateDebounced,
		onDateSelected: (dateObj) => setDate(dateObj.date)
	});

	const { calendars = [] } = dayzed;

	useUpdateEffect(() => handleReset(), [isDatePickerOpen, value]);

	return (
		<DatePickerContext.Provider
			value={{
				color,
				colorMode,
				format,
				date: dateDebounced,
				dayzed,
				spacing
			}}
		>
			{renderButton({
				color: isDatePickerOpen ? color : 'gray',
				colorMode,
				onClick: () => handleOpen()
			})}

			<Modal
				colorMode={colorMode}
				isOpen={isDatePickerOpen}
				onClose={() => onDatePickerClose()}
				size={monthsToDisplay === 1 ? 'xl' : '5xl'}
				spacing={spacing}
			>
				<ModalStack>
					<ModalHeader
						renderTitle={(props) => <Text {...props}>Date Picker</Text>}
						// renderSubtitle={(props) => (
						// 	<Text {...props}>
						// 		{`Sort ${formatMediaTypeLabel({
						// 			type: 'multiple',
						// 			mediaType
						// 		})} by ${[...(mediaType === 'movie' ? movieSortBy : tvSortBy)]
						// 			.map(({ label }) => label)
						// 			.join(', ')} & by either in Ascending or Descending order.`}
						// 	</Text>
						// )}
						renderCancel={({ icon, category, ...rest }) => (
							<IconButton {...rest}>
								<IconButtonIcon icon={icon} category={category} />
							</IconButton>
						)}
					/>
					<ModalBody>
						<HStack
							width='100%'
							alignItems='stretch'
							justifyContent='stretch'
							divider={<Divider colorMode={colorMode} orientation='vertical' />}
							spacing={spacing}
						>
							{calendars.map((calendar) => (
								<Calendar
									key={`ds-cl-DatePicker-${calendar.month}-${calendar.year}`}
									calendar={calendar}
								/>
							))}
						</HStack>
					</ModalBody>
					<ModalFooter
						renderCancel={(props) => <Button {...props}>Cancel</Button>}
						renderAction={(props) => (
							<HStack>
								<Fade in={!dayjs(dateDebounced).isSame(new Date(), 'day')}>
									<Button
										{...props}
										{...(dayzed.getDateProps
											? dayzed.getDateProps({
													dateObj: {
														date: new Date(),
														nextMonth: false,
														prevMonth: false,
														selectable: true,
														selected: false,
														today: false
													}
											  })
											: {})}
										color={color}
										variant='text'
									>
										Today
									</Button>
								</Fade>
								<Button {...props} color={color} onClick={() => handleSetDate()}>
									Set Date
								</Button>
							</HStack>
						)}
					/>
				</ModalStack>
			</Modal>
		</DatePickerContext.Provider>
	);
};

export default DatePicker;
