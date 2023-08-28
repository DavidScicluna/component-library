import { useMemo } from 'react';

import type { ColorTypeClass, ThemeAppearanceProps } from '@common/types';
import type { ColorHueType } from '@common/utils';
import { getColorClass, getColorHex } from '@common/utils';

import { useAppTheme } from '.';

type UseGetColorProps = ThemeAppearanceProps & {
	colorType: 'default' | 'color';
	hueType: ColorHueType;
	classType?: ColorTypeClass;
};

const useGetColor = (props: UseGetColorProps): string => {
	const { color: __DEFAULT_COLOR__, colorMode: __DEFAULT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_COLORMODE__,
		colorType = 'default',
		hueType,
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
