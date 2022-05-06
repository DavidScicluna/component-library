import { FC, useCallback } from 'react';

import { toRgba } from 'color2k';
import { SpinnerCircularFixed } from 'spinners-react';

import { SpinnerProps } from './types';

import { useTheme } from '../../../../../common/hooks';
import { getHue } from '../../../../../common/utils/color';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	size as defaultSize,
	variant as defaultVariant
} from '../../common/data/defaultPropValues';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode, size = defaultSize, variant = defaultVariant } = props;

	/**
	 * This method will return the appropriate color in RGBA depending on color & colorMode props
	 *
	 * @returns - string: RGBA color
	 */
	const handleReturnColorRGBA = useCallback((): string => {
		switch (variant) {
			case 'outlined':
			case 'text':
				return toRgba(
					theme.colors[color === 'black' || color === 'white' ? 'gray' : color][
						getHue({
							colorMode: 'light',
							type:
								color === 'black' || color === 'white'
									? color
									: color === 'gray'
									? 'text.secondary'
									: 'color'
						})
					]
				);
			default:
				return toRgba(
					theme.colors[color === 'black' || color === 'white' ? 'gray' : color][
						colorMode === 'light' ? (color === 'white' ? 900 : 50) : color === 'black' ? 50 : 900
					]
				);
		}
	}, [variant, theme, color, colorMode]);

	/**
	 * This method will return the appropriate font-size in PX depending on size prop
	 *
	 * @returns - number: Font-size in PX
	 */
	const handleReturnSize = useCallback((): string => {
		return theme.fontSizes[size];
	}, [theme, size]);

	return (
		<SpinnerCircularFixed
			color={handleReturnColorRGBA()}
			secondaryColor={toRgba(theme.colors.gray[colorMode === 'light' ? 200 : 700])}
			size={handleReturnSize()}
			thickness={160}
			speed={140}
		/>
	);
};

export default Spinner;
