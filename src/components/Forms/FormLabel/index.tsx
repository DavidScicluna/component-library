import { FC } from 'react';

import { Center,FormLabel as CUIFormLabel, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../common/hooks';

import {
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	size as defaultSize
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { FormLabelProps } from './types';

const FormLabel: FC<FormLabelProps> = (props) => {
	const theme = useTheme();

	const {
		children,
		colorMode = defaultColorMode,
		id,
		isDisabled = defaultIsDisabled,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		size = defaultSize,
		sx
	} = props;

	const style = useStyles({ theme, colorMode, size });

	return (
		<CUIFormLabel
			as={HStack}
			aria-disabled={isDisabled}
			aria-readonly={isReadOnly}
			aria-required={isRequired}
			display='inline-flex'
			htmlFor={id}
			spacing={0.75}
			sx={merge(style.formLabel, sx)}
			_disabled={style.disabled}
		>
			<Center as='label'>{children}</Center>

			{isRequired && (
				<Center as='span' className='ds-cl-required-indicator'>
					*
				</Center>
			)}
		</CUIFormLabel>
	);
};

export default FormLabel;
