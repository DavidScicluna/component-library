import { useEffect } from 'react';

import { __KEY_LOCALSTORAGE_APP_COLOR__ } from '@common/keys';
import type { ThemeAppColor } from '@common/types';

const useGetColor = (defaultColor: ThemeAppColor): ThemeAppColor => {
	const handleSetColorMode = (): void => {
		globalThis?.window?.localStorage.removeItem(__KEY_LOCALSTORAGE_APP_COLOR__);
		globalThis?.window?.localStorage.setItem(__KEY_LOCALSTORAGE_APP_COLOR__, defaultColor);
	};

	useEffect(() => handleSetColorMode(), [defaultColor]);

	return defaultColor;
};

export default useGetColor;
