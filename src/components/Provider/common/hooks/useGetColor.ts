import { useEffect } from 'react';

import { localStorageColorKey } from '../../../../common/keys';
import { AppColor } from '../../../../common/types';

const useGetColor = (defaultColor: AppColor): AppColor => {
	const handleSetColorMode = (): void => {
		globalThis?.localStorage?.removeItem(localStorageColorKey);
		globalThis?.localStorage?.setItem(localStorageColorKey, defaultColor);
	};

	useEffect(() => handleSetColorMode(), [defaultColor]);

	return defaultColor;
};

export default useGetColor;
