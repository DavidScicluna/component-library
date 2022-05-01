import { ColorMode } from '@chakra-ui/react';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { IconButtonColor, Size, Variant } from '../../types';

export type ButtonStyleProps = {
	theme: Theme;
	color: IconButtonColor;
	colorMode: ColorMode;
	isLoading: boolean;
	isRound: boolean;
	size: Size;
	variant: Variant;
};

export type ButtonStyleReturn = {
	iconbutton: Style;
	active: Style;
	disabled: Style;
};
