import { FC, useCallback } from 'react';

import { SpinnerCircularFixed } from 'spinners-react';


import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	size as defaultSize,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import { SpinnerProps } from './types';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode, size = defaultSize, variant = defaultVariant } = props;

	const handleReturnPrimaryColorRGBA = useCallback((): string => {
		switch (variant) {
			case 'outlined':
			case 'text':
				return getColor({
					theme,
					colorMode,
					color: color === 'black' || color === 'white' ? 'gray' : color,
					type:
						color === 'black'
							? 'darkest'
							: color === 'white'
							? 'lightest'
							: color === 'gray'
							? 'text.secondary'
							: 'color'
				});
			default:
				return getColor({
					theme,
					colorMode,
					color: 'gray',
					type:
						color === 'black'
							? 'lightest'
							: color === 'white'
							? 'darkest'
							: colorMode === 'light'
							? 'lightest'
							: 'darkest'
				});
		}
	}, [theme, color, colorMode, variant]);

	const handleReturnSecondaryColorRGBA = useCallback((): string => {
		return getColor({
			theme,
			colorMode: color === 'black' ? 'dark' : color === 'white' ? 'light' : colorMode,
			type: 'divider',
			color: color === 'black' || color === 'white' ? 'gray' : color
		});
	}, [theme, color, colorMode, variant]);

	const handleReturnSize = useCallback((): string => {
		return theme.fontSizes[size];
	}, [theme, size]);

	return (
		<SpinnerCircularFixed
			color={handleReturnPrimaryColorRGBA()}
			secondaryColor={handleReturnSecondaryColorRGBA()}
			size={handleReturnSize()}
			thickness={160}
			speed={140}
		/>
	);
};

export default Spinner;
