import { useEffect } from 'react';

import { useColorMode } from '@chakra-ui/react';

import memoize from 'micro-memoize';
import { useMediaMatch } from 'rooks';

import { useDebounce } from '../../../../common/hooks';
import { AppFullColorMode, AppLightColorMode } from '../../../../common/types';

type GetModeProps = {
	colorMode: AppFullColorMode;
	isDarkMode: boolean;
};

const getMode = memoize(({ colorMode, isDarkMode = false }: GetModeProps): AppLightColorMode => {
	if (colorMode === 'system') {
		return isDarkMode ? 'dark' : 'light';
	} else {
		return colorMode;
	}
});

type UseCheckColorModeProps = { colorMode: AppFullColorMode };

const useCheckColorMode = ({ colorMode: appColorMode }: UseCheckColorModeProps): AppLightColorMode => {
	const { colorMode, setColorMode } = useColorMode();
	const colorModeDebounced = useDebounce(colorMode, 'ultra-slow');

	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const handleSetColorMode = (): void => {
		setColorMode(getMode({ colorMode: appColorMode, isDarkMode }));
	};

	useEffect(() => handleSetColorMode(), [colorModeDebounced, isDarkMode]);

	return colorModeDebounced;
};

export default useCheckColorMode;
