/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import { AppColor } from '../../../../common/types';

const useGetColor = (defaultColor: AppColor): AppColor => {
	const [_, setLSThemeFullColor] = useLocalStorage<AppColor>('ds-cl-theme-color', defaultColor);

	const handleSetColorMode = (): void => {
		setLSThemeFullColor(defaultColor);
	};

	useEffect(() => handleSetColorMode(), [defaultColor]);

	return defaultColor;
};

export default useGetColor;
