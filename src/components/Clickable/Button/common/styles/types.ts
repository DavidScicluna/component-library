import { ColorMode } from '@chakra-ui/react';

import { ButtonProps, ButtonColor, Size, Variant } from '../../types';

export type ButtonStyleProps = {
	color: ButtonColor;
	colorMode: ColorMode;
	isFullWidth: ButtonProps['isFullWidth'];
	isLoading: ButtonProps['isLoading'];
	size: Size;
	variant: Variant;
};
