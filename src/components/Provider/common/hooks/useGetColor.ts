import { useEffect } from 'react';

import { __KEY_LOCALSTORAGE_APP_COLOR__ } from '@common/keys';
import type { AppColor } from '@common/types/theme';

const useGetColor = (defaultColor: AppColor): AppColor => {
	const handleSetColorMode = (): void => {
		localStorage.removeItem(__KEY_LOCALSTORAGE_APP_COLOR__);
		localStorage.setItem(__KEY_LOCALSTORAGE_APP_COLOR__, defaultColor);
	};

	useEffect(() => handleSetColorMode(), [defaultColor]);

	return defaultColor;
};

export default useGetColor;
