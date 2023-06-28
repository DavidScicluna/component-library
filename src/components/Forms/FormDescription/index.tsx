import { forwardRef, ReactElement } from 'react';

import { FormLabel } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import Collapse from '../../Transitions/Collapse';
import { size as defaultSize } from '../FormControl/common/default/props';
import { useFormControlContext } from '../FormControl/common/hooks';

import useStyles from './common/styles';
import { FormDescriptionProps, FormDescriptionRef } from './common/types';

const FormDescription = forwardRef<FormDescriptionRef, FormDescriptionProps>(function FormDescription(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const { colorMode: formControlColorMode, size: formControlSize } = useFormControlContext();

	const {
		children,
		colorMode = formControlColorMode || defaultColorMode,
		size = formControlSize || defaultSize,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, colorMode, size });

	return (
		<Collapse in={!!children}>
			<FormLabel {...rest} ref={ref} sx={merge(style.formDescription, sx)}>
				{children}
			</FormLabel>
		</Collapse>
	);
});

export default FormDescription;
