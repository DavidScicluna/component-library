import { FC } from 'react';

import { FormLabel as CUIFormLabel } from '@chakra-ui/react';

import { merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isReadOnly as defaultIsReadOnly,
	size as defaultSize
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { FormLabelProps } from './types';

import { useTheme } from '../../../common/hooks';

const FormLabel: FC<FormLabelProps> = (props) => {
	const theme = useTheme();

	const {
		children,
		colorMode = defaultColorMode,
		id,
		isDisabled = defaultIsDisabled,
		isReadOnly = defaultIsReadOnly,
		size = defaultSize,
		sx
	} = props;

	const style = useStyles({ theme, colorMode, size });

	return (
		<CUIFormLabel
			aria-disabled={isDisabled}
			aria-readonly={isReadOnly}
			htmlFor={id}
			sx={merge(style.formLabel, sx)}
			_disabled={style.disabled}
		>
			{children}
		</CUIFormLabel>
	);
};

export default FormLabel;
