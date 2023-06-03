import { useEffect, useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { useMediaMatch } from 'rooks';

import { colorMode as defaultColorMode } from '../../../../common/default/props';
import { localStorageColorModeKey } from '../../../../common/keys';
import { AppColorMode, AppFullColorMode } from '../../../../common/types';

const useGetColorMode = (initialColorMode: AppFullColorMode): AppColorMode => {
	const [colorMode, setColorMode] = useState<AppColorMode>(defaultColorMode);

	const { setColorMode: setCUIColorMode } = useColorMode();

	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const handleSetColorMode = (): void => {
		localStorage.removeItem(localStorageColorModeKey);

		if (initialColorMode === 'system') {
			const updatedColorMode: AppFullColorMode = isDarkMode ? 'dark' : 'light';

			setColorMode(updatedColorMode);
			setCUIColorMode(updatedColorMode);

			localStorage.setItem(localStorageColorModeKey, updatedColorMode);
		} else {
			setColorMode(initialColorMode);
			setCUIColorMode(initialColorMode);

			localStorage.setItem(localStorageColorModeKey, initialColorMode);
		}
	};

	useEffect(() => handleSetColorMode(), [initialColorMode, isDarkMode]);

	return colorMode;
};

export default useGetColorMode;
