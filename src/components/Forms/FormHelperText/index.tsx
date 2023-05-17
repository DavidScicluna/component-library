import { forwardRef, ReactElement } from 'react';

import { FormHelperText as CUIFormHelperText } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import Collapse from '../../Transitions/Collapse';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { FormHelperTextProps, FormHelperTextRef } from './common/types';

const FormHelperText = forwardRef<FormHelperTextRef, FormHelperTextProps>(function FormHelperText(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { colorMode: appColorMode } = useProviderContext();

	const {
		colorMode: defaultColorMode = appColorMode,
		isError: defaultIsError,
		isWarning: defaultIsWarning,
		isSuccess: defaultIsSuccess,
		size
	} = useFormControlContext();

	const {
		children,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, colorMode, isError, isWarning, isSuccess, size });

	return (
		<Collapse in={!!children}>
			<CUIFormHelperText {...rest} ref={ref} sx={merge(style.formHelperText, sx)}>
				{children}
			</CUIFormHelperText>
		</Collapse>
	);
});

export default FormHelperText;
