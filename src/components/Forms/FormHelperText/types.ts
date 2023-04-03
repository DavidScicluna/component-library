import { ColorMode } from '@chakra-ui/react';

import { Style } from '../../../common/types';

export type FormHelperTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FormHelperTextProps = {
	children?: string;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isReadOnly?: boolean;
	size?: FormHelperTextSize;
	sx?: Style;
};
