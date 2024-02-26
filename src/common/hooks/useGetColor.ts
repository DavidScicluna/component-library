import { useMemo } from 'react';

import { DEFAULT_COLOR } from '@common/constants';
import type { ColorTypeClass, ThemeAppearanceProps } from '@common/types';
import type { ColorHueType } from '@common/utils';
import { getColorClass, getColorHex } from '@common/utils';

import { useAppTheme } from '.';

type UseGetColorProps = ThemeAppearanceProps & {
	colorType: 'default' | 'color';
	hueType?: ColorHueType;
	classType?: ColorTypeClass;
};

const useGetColor = (props: UseGetColorProps): string => {
	const { colorMode: DEFAULT_GET_COLOR_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_GET_COLOR_COLORMODE,
		colorType = 'default',
		hueType = 'default',
		classType
	} = props;

	const string = useMemo<string>(() => {
		if (classType) {
			return getColorClass({
				color: colorType === 'default' ? 'gray' : color,
				colorMode,
				hueType,
				classType
			});
		} else {
			return getColorHex({
				color: colorType === 'default' ? 'gray' : color,
				colorMode,
				hueType
			});
		}
	}, [color, colorMode, colorType, hueType, classType]);

	return string;
};

export default useGetColor;
