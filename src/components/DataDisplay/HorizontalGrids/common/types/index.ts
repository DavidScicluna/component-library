import { ColorMode } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type HorizontalGridColor = Exclude<Color, 'transparent'>;
export type HorizontalGridColorMode = ColorMode;

export type CommonHorizontalGridProps = {
	color?: HorizontalGridColor;
	colorMode?: HorizontalGridColorMode;
};
