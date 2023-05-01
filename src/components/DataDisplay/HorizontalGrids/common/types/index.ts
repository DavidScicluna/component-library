import { ColorMode } from '@chakra-ui/react';

import { Color, Space } from '../../../../../theme/types';

export type HorizontalGridColor = Exclude<Color, 'transparent'>;
export type HorizontalGridColorMode = ColorMode;

export type CommonHorizontalGridProps = {
	color?: HorizontalGridColor;
	colorMode?: HorizontalGridColorMode;
	spacing?: Space;
};
