import { forwardRef, ReactElement } from 'react';

import { Box, FormLabel as CUIFormLabel } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import {
	isError as defaultIsError,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../FormControl/common/default/props';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { FormLabelProps, FormLabelRef } from './common/types';

const FormLabel = forwardRef<FormLabelRef, FormLabelProps>(function FormLabel(props, ref): ReactElement {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		colorMode: formControlColorMode,
		isError: formControlIsError,
		isRequired: formControlIsRequired,
		isWarning: formControlIsWarning,
		isSuccess: formControlIsSuccess,
		size: formControlSize
	} = useFormControlContext();

	const {
		children,
		colorMode = formControlColorMode || defaultColorMode,
		isError = formControlIsError || defaultIsError,
		isRequired = formControlIsRequired || defaultIsRequired,
		isWarning = formControlIsWarning || defaultIsWarning,
		isSuccess = formControlIsSuccess || defaultIsSuccess,
		size = formControlSize || defaultSize,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, colorMode, isError, isWarning, isSuccess, size });

	return (
		<CUIFormLabel {...rest} ref={ref} aria-required={isRequired} sx={merge(style.formLabel, sx)}>
			{children}

			{isRequired ? (
				<Box as='span' className='ds-cl-form-label-required-indicator'>
					{' *'}
				</Box>
			) : null}
		</CUIFormLabel>
	);
});

export default FormLabel;
