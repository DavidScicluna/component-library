import { forwardRef, ReactElement } from 'react';

import { Button as CUIButton, Center } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../../../common/hooks';
import { useDatePickerContext } from '../../../../common/hooks';

import { variant as defaultVariant } from './common/default/props';
import useStyles from './common/styles';
import { CalendarDayProps, CalendarDayRef } from './common/types';

const CalendarDay = forwardRef<CalendarDayRef, CalendarDayProps>(function CalendarDay(props, ref): ReactElement {
	const theme = useTheme();

	const { color, colorMode } = useDatePickerContext();

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
