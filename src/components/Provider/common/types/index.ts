import { ChakraProviderProps, ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../common/types';
import { IconCategory } from '../../../Icon/common/types';

export type ProviderProps = ChakraProviderProps & {
	color?: AppColor;
	colorMode?: ColorMode;
};

export type ProviderContext = Pick<ProviderProps, 'color' | 'colorMode'> & {
	hasIconLoaded: Record<IconCategory, boolean>;
};
