import { ColorMode } from '@chakra-ui/react';

import { IconButtonProps, IconButtonColor, Size, Variant } from '../../types';

export type ButtonStyleProps = {
	color: IconButtonColor;
	colorMode: ColorMode;
	isLoading: IconButtonProps['isLoading'];
	size: Size;
	variant: Variant;
};
