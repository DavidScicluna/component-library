import { WithCSSVar, useTheme } from '@chakra-ui/react';

import { Theme } from '../../theme/types';

const useThemeTyped: <T extends Theme>() => WithCSSVar<T> = useTheme;

export default useThemeTyped;
