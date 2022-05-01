import { FC, useCallback } from 'react';

import { toRgba } from 'color2k';
import { SpinnerCircularFixed } from 'spinners-react';

import { SpinnerProps } from './types';

import { useTheme } from '../../../../../common/hooks';
import { convertStringToNumber } from '../../../../../common/utils';
import { handleFontSize } from '../../common/utils';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, size, variant } = props;

	/**
	 * This method will return the appropriate color in RGBA depending on color & colorMode props
	 *
	 * @returns - string: RGBA color
	 */
	const handleReturnColorRGBA = useCallback((): string => {
		switch (variant) {
			case 'outlined':
			case 'icon': {
				return toRgba(theme.colors[color][colorMode === 'light' ? 500 : 400]);
			}
			default: {
				return toRgba(
					theme.colors.gray[
						colorMode === 'light' ? (color === 'white' ? 400 : 50) : color === 'black' ? 500 : 900
					]
				);
			}
		}
	}, [variant, theme, color, colorMode]);

	/**
	 * This method will return the appropriate font-size in PX depending on size prop
	 *
	 * @returns - number: Font-size in PX
	 */
	const handleReturnSize = useCallback((): number => {
		return convertStringToNumber(handleFontSize(size), 'px');
	}, [size]);

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
