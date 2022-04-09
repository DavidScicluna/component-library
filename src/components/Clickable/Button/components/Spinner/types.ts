import { ColorMode } from '@chakra-ui/react';

import { ButtonColor, Size, Variant } from '../../types';

export type SpinnerProps = {
	color: ButtonColor;
	colorMode: ColorMode;
	hasChildren?: boolean;
	size: Size;
	variant: Variant;
};
