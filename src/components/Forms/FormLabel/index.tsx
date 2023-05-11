import { forwardRef, ReactElement } from 'react';

import { Box, FormLabel as CUIFormLabel } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { FormLabelProps, FormLabelRef } from './common/types';

const FormLabel = forwardRef<FormLabelRef, FormLabelProps>(function FormLabel(props, ref): ReactElement {
	const theme = useTheme();

	const {
		colorMode: defaultColorMode,
		isError: defaultIsError,
		isWarning: defaultIsWarning,
		isRequired: defaultIsRequired,
		isSuccess: defaultIsSuccess,
		size
	} = useFormControlContext();

	const {
		children,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isRequired = defaultIsRequired,
		isSuccess = defaultIsSuccess,
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
