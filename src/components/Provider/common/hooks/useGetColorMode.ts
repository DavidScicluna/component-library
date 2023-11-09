import { useEffect, useState } from 'react';

import { useMediaMatch } from 'rooks';

import { __DEFAULT_APP_COLORMODE__ } from '@common/constants';
import { __KEY_LOCALSTORAGE_APP_COLORMODE__ } from '@common/keys';
import type { ThemeAppColorMode, ThemeColorMode } from '@common/types';

const useGetColorMode = (initialColorMode: ThemeColorMode): ThemeAppColorMode => {
	const isDarkMode = useMediaMatch('(prefers-color-scheme: dark)');

	const [colorMode, setColorMode] = useState<ThemeAppColorMode>(__DEFAULT_APP_COLORMODE__);

	const handleSetColorMode = (): void => {
		globalThis?.localStorage.removeItem(__KEY_LOCALSTORAGE_APP_COLORMODE__);

		if (initialColorMode === 'system') {
			const updatedColorMode: ThemeAppColorMode = isDarkMode ? 'dark' : 'light';

			setColorMode(updatedColorMode);

			globalThis?.localStorage.setItem(__KEY_LOCALSTORAGE_APP_COLORMODE__, updatedColorMode);
		} else {
			setColorMode(initialColorMode);

			globalThis?.localStorage.setItem(__KEY_LOCALSTORAGE_APP_COLORMODE__, initialColorMode);
		}
	};

	useEffect(() => handleSetColorMode(), [initialColorMode, isDarkMode]);

	return colorMode;
};

export default useGetColorMode;
