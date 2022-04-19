import { FC, useCallback } from 'react';

import { useTheme } from '@chakra-ui/react';

import { toRgba } from 'color2k';
import { SpinnerCircularFixed } from 'spinners-react';

import { SpinnerProps } from './types';

import { handleConvertStringToNumber } from '../../../../../common/utils';
import { Theme } from '../../../../../theme/types';
import { handleIconFontSize } from '../../common/utils';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme<Theme>();

	const { color, colorMode, size, variant } = props;

	/**
	 * This method will return the appropriate color in RGBA depending on color & colorMode props
	 *
	 * @returns - string: RGBA color
	 */
	const handleReturnColorRGBA = useCallback((): string => {
		switch (variant) {
			case 'outlined':
			case 'text': {
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
		return handleConvertStringToNumber(handleIconFontSize(size), 'px');
	}, [size]);

	const rgba = handleReturnColorRGBA();
	const pixels = handleReturnSize();

	return (
		<SpinnerCircularFixed
			color={rgba}
			secondaryColor={toRgba(theme.colors.gray[colorMode === 'light' ? 200 : 700])}
			size={pixels}
			thickness={160}
			speed={140}
		/>
	);
};

export default Spinner;
