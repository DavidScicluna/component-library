import { useEffect } from 'react';

import { KEY_LOCALSTORAGE_APP_COLOR } from '@common/keys';
import type { ThemeAppColor } from '@common/types';

const useGetColor = (defaultColor: ThemeAppColor): ThemeAppColor => {
	const handleSetColorMode = (): void => {
		if (typeof window !== 'undefined') {
			window.localStorage.removeItem(KEY_LOCALSTORAGE_APP_COLOR);
			window.localStorage.setItem(KEY_LOCALSTORAGE_APP_COLOR, defaultColor);
		}
	};

	useEffect(() => handleSetColorMode(), [defaultColor]);

	return defaultColor;
};

export default useGetColor;
