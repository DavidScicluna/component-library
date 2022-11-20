import { ReactElement, forwardRef, useContext } from 'react';

import { Center, Button as CUIButton } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { dataAttr } from '@chakra-ui/utils';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { DatePickerContext } from '../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../types';
import { useTheme } from '../../../../../../../common/hooks';

import { variant as defaultVariant } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { CalendarDayRef, CalendarDayProps } from './types';

const CalendarDay = forwardRef<CalendarDayRef, CalendarDayProps>(function CalendarDay(props, ref): ReactElement {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<DatePickerContextType>(DatePickerContext);

	const {
		children,
		// size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, variant });

	return (
		<Center width='100%'>
			<CUIButton
				{...rest}
				ref={ref}
				aria-disabled={variant === 'disabled'}
				data-active={dataAttr(variant === 'selected')}
				tabIndex={0}
				isActive={variant === 'selected'}
				isDisabled={variant === 'disabled'}
				variant='unstyled'
				sx={merge(style.day, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				{children}
			</CUIButton>
		</Center>
	);
});

export default CalendarDay;
