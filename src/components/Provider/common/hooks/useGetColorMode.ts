/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { useMediaMatch } from 'rooks';
import { useLocalStorage } from 'usehooks-ts';

import { colorMode as defaultColorMode } from '../../../../common/default/props';
import { useDebounce } from '../../../../common/hooks';
import { AppColorMode, AppFullColorMode } from '../../../../common/types';

const useGetColorMode = (initialColorMode: AppFullColorMode): AppColorMode => {
	const [_, setLSThemeFullColorMode] = useLocalStorage<AppColorMode>('ds-cl-theme-color-mode', defaultColorMode);

	const [colorMode, setColorMode] = useState<AppColorMode>(defaultColorMode);
	const colorModeDebounced = useDebounce(colorMode, 'ultra-slow');

	const { setColorMode: setCUIColorMode } = useColorMode();

	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const handleSetColorMode = (): void => {
		if (initialColorMode === 'system') {
			const colorMode: AppFullColorMode = initialColorMode;
			const updatedColorMode: AppFullColorMode =
				colorMode === 'system' ? (isDarkMode ? 'dark' : 'light') : colorMode;

			setColorMode(updatedColorMode);
			setCUIColorMode(updatedColorMode);
			setLSThemeFullColorMode(updatedColorMode);
		} else {
			setColorMode(initialColorMode);
			setCUIColorMode(initialColorMode);
			setLSThemeFullColorMode(initialColorMode);
		}
	};

	useEffect(() => handleSetColorMode(), [initialColorMode, isDarkMode]);

	return colorModeDebounced;
};

export default useGetColorMode;
