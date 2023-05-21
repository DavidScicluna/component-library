import { ChakraProviderProps } from '@chakra-ui/react';

import { AppFullColorMode, CommonThemeProps } from '../../../../common/types';

export type ProviderProps = ChakraProviderProps & {
	colorMode?: AppFullColorMode;
} & Pick<CommonThemeProps, 'color'>;

export type ProviderContext = Pick<ProviderProps, 'color'> & Pick<CommonThemeProps, 'colorMode'>;
