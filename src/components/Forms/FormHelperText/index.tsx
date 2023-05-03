import { FC } from 'react';

import { FormHelperText as CUIFormHelperText } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { colorMode as defaultColorMode } from '../../../common/default/props';
import { useTheme } from '../../../common/hooks';

import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isReadOnly as defaultIsReadOnly,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from './common/default/props';
import useStyles from './common/styles';
import { FormHelperTextProps } from './common/types';

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
			_readOnly={style.readOnly}
		>
			{children}
		</CUIFormHelperText>
	);
};

export default FormHelperText;
