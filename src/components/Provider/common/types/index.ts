import { ChakraProviderProps } from '@chakra-ui/react';

import { AppFullColorMode, CommonThemeProps } from '../../../../common/types';
import { IconCategory } from '../../../DataDisplay/Icon/common/types';

export type IconFontStatus = Record<IconCategory, boolean>;

export type ProviderProps = ChakraProviderProps & {
	colorMode?: AppFullColorMode;
} & Pick<CommonThemeProps, 'color'>;

export type ProviderContext = Pick<ProviderProps, 'color'> & {
	iconFontStatus: IconFontStatus;
} & Pick<CommonThemeProps, 'colorMode'>;
