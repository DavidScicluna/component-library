import { forwardRef, ReactElement } from 'react';

import { FormHelperText as CUIFormHelperText } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import Collapse from '../../Transitions/Collapse';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../FormControl/common/default/props';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { FormHelperTextProps, FormHelperTextRef } from './common/types';

const FormHelperText = forwardRef<FormHelperTextRef, FormHelperTextProps>(function FormHelperText(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		colorMode: formControlColorMode,
		isError: formControlIsError,
		isWarning: formControlIsWarning,
		isSuccess: formControlIsSuccess,
		size: formControlSize
	} = useFormControlContext();

	const {
		children,
		colorMode = formControlColorMode || defaultColorMode,
		isError = formControlIsError || defaultIsError,
		isWarning = formControlIsWarning || defaultIsWarning,
		isSuccess = formControlIsSuccess || defaultIsSuccess,
		size = formControlSize || defaultSize,
		sx,
		...rest
	} = props;

	const style = useStyles({
		theme,
		colorMode,
		isError,
		isWarning,
		isSuccess,
		size
	});

	return (
		<Collapse in={!!children}>
			<CUIFormHelperText {...rest} ref={ref} sx={merge(style.formHelperText, sx)}>
				{children}
			</CUIFormHelperText>
		</Collapse>
	);
});

export default FormHelperText;
