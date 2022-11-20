import { FC, useContext, useEffect, useRef } from 'react';

import { Center } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../../../../common/data/defaultPropValues';
import { DatePickerContext } from '../../../../../../../..';
import { DatePickerContext as DatePickerContextType } from '../../../../../../../../types';
import { useTheme } from '../../../../../../../../../../../common/hooks';

import {
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled,
	isToday as defaultIsToday
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { DropdownButtonItemProps, DropdownButtonItemRef } from './types';

const DropdownButtonItem: FC<DropdownButtonItemProps> = (props) => {
	const theme = useTheme();

	const ref = useRef<DropdownButtonItemRef>(null);

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<DatePickerContextType>(DatePickerContext);

	const {
		children,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isToday = defaultIsToday,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isToday });

	useEffect(() => {
		if (ref && ref.current && isActive) {
			ref.current.scrollIntoView({ block: 'center', inline: 'center' });
		}
	}, [isActive]);

	return (
		<Center
			{...rest}
			ref={ref}
			aria-disabled={isDisabled}
			data-active={dataAttr(isActive)}
			tabIndex={0}
			sx={merge(style.item, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			{children}
		</Center>
	);
};

export default DropdownButtonItem;