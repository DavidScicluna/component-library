import { FC } from 'react';

import { FormHelperText as CUIFormHelperText } from '@chakra-ui/react';

import { merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isWarning as defaultIsWarning,
	isSuccess as defaultIsSuccess,
	isReadOnly as defaultIsReadOnly,
	size as defaultSize
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { FormHelperTextProps } from './types';

import { useTheme } from '../../../common/hooks';

const FormHelperText: FC<FormHelperTextProps> = (props) => {
	const theme = useTheme();

	const {
		children,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		isReadOnly = defaultIsReadOnly,
		size = defaultSize,
		sx
	} = props;

	const style = useStyles({ theme, colorMode, isError, isWarning, isSuccess, size });

	return (
		<CUIFormHelperText
			aria-disabled={isDisabled}
			aria-readonly={isReadOnly}
			sx={merge(style.formHelperText, sx)}
			_disabled={style.disabled}
			_readOnly={style.readonly}
		>
			{children}
		</CUIFormHelperText>
	);
};

export default FormHelperText;
