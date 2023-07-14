import { useMemo } from 'react';

import { ClassType } from '../types/classes';
import { CommonThemeProps } from '../types/theme';
import { ColorHueType, getColorClass, getColorHex } from '../utils/color';

import { useAppTheme } from '.';

type UseGetColorProps = CommonThemeProps & {
	colorType: 'default' | 'color' | 'appColor';
	hueType: ColorHueType;
	classType?: ClassType;
};

const useGetColor = (props: UseGetColorProps): string => {
	const { color: defaultColor, colorMode: defaultColorMode } = useAppTheme();

	const { color = defaultColor, colorMode = defaultColorMode, colorType = 'default', hueType, classType } = props;

	const string = useMemo<string>(() => {
		if (classType) {
			return getColorClass({
				color: colorType === 'default' ? 'gray' : colorType === 'appColor' ? defaultColor : color,
				colorMode,
				hueType,
				classType
			});
		} else {
			return getColorHex({
				color: colorType === 'default' ? 'gray' : colorType === 'appColor' ? defaultColor : color,
				colorMode,
				hueType
			});
		}
	}, [color, colorMode, colorType, hueType, classType]);

	return string;
};

export default useGetColor;
