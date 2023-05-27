import { useMemo } from 'react';

import { useDSCLProviderContext, useTheme } from '../..';
import { CommonThemeProps } from '../types';
import { getColor, GetColorProps } from '../utils/color';

type UseGetColorProps = Pick<GetColorProps, 'type'> & CommonThemeProps;

const useGetColor = (props: UseGetColorProps): string => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useDSCLProviderContext();

	const { color = defaultColor, colorMode = defaultColorMode, type } = props;

	const string = useMemo<string>(() => {
		return getColor({ theme, colorMode, color, type });
	}, [color, colorMode, type]);

	return string;
};

export default useGetColor;
