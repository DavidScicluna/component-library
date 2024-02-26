import { useEffect, useState } from 'react';

import { useMediaMatch } from 'rooks';

import { DEFAULT_APP_COLORMODE } from '@common/constants';
import { KEY_LOCALSTORAGE_APP_COLORMODE } from '@common/keys';
import type { ThemeAppColorMode, ThemeColorMode } from '@common/types';

const useGetColorMode = (initialColorMode: ThemeColorMode): ThemeAppColorMode => {
	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const [colorMode, setColorMode] = useState<ThemeAppColorMode>(DEFAULT_APP_COLORMODE);

	const handleSetColorMode = (): void => {
		if (typeof window !== 'undefined') {
			window.localStorage.removeItem(KEY_LOCALSTORAGE_APP_COLORMODE);

			if (initialColorMode === 'system') {
				const updatedColorMode: ThemeAppColorMode = isDarkMode ? 'dark' : 'light';

				setColorMode(updatedColorMode);

				window.localStorage.setItem(KEY_LOCALSTORAGE_APP_COLORMODE, updatedColorMode);
			} else {
				setColorMode(initialColorMode);

				window.localStorage.setItem(KEY_LOCALSTORAGE_APP_COLORMODE, initialColorMode);
			}
		}
	};

	useEffect(() => handleSetColorMode(), [initialColorMode, isDarkMode]);

	return colorMode;
};

export default useGetColorMode;
