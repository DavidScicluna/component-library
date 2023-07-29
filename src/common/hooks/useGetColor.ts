import { useMemo } from 'react';

import type { ClassType } from '@common/types/classes';
import type { CommonThemeProps } from '@common/types/theme';
import type { ColorHueType} from '@common/utils/color';
import { getColorClass, getColorHex } from '@common/utils/color';

import { useAppTheme } from '.';

type UseGetColorProps = CommonThemeProps & {
	colorType: 'default' | 'color';
	hueType: ColorHueType;
	classType?: ClassType;
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
