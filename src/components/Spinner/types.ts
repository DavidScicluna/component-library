import { ColorMode } from '@chakra-ui/react';

import { SpinnerCircularFixedProps,SpinnerCircularProps } from 'spinners-react';

import { Color, FontSize } from '../../theme/types';

export type SpinnerColor = Exclude<Color, 'transparent'>;
export type SpinnerMode = 'fixed' | 'default';

export type SpinnerProps = Omit<SpinnerCircularProps, 'color' | 'secondaryColor' | 'size'> & {
	color?: SpinnerColor;
	colorMode?: ColorMode;
	mode?: SpinnerMode;
	size?: FontSize;
} & Omit<SpinnerCircularFixedProps, 'color' | 'secondaryColor' | 'size'>;
