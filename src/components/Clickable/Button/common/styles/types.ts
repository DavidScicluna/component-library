import { ColorMode } from '@chakra-ui/react';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { ButtonProps, ButtonColor, Size, Variant } from '../../types';

export type ButtonStyleProps = {
	theme: Theme;
	color: ButtonColor;
	colorMode: ColorMode;
	isFullWidth: ButtonProps['isFullWidth'];
	isLoading: ButtonProps['isLoading'];
	size: Size;
	variant: Variant;
};

export type ButtonStyleReturn = {
	button: Style;
	active: Style;
	disabled: Style;
};
