import { BoxProps, ColorMode } from '@chakra-ui/react';

import { Orientation } from '../../common/types';

export type DividerRef = HTMLHRElement | null;

export type DividerProps = {
	colorMode?: ColorMode;
	orientation?: Orientation;
} & BoxProps;
