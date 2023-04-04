import { FC, useMemo } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { SpinnerCircular, SpinnerCircularFixed } from 'spinners-react';

import { useTheme } from '../../common/hooks';
import { getColor } from '../../common/utils/color';

import { SpinnerProps } from './types';

const Spinner: FC<SpinnerProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = 'light' } = useColorMode();

	const {
		color = 'blue',
		colorMode = colorModeHook,
		mode = 'default',
		thickness = 160,
		speed = 140,
		size = 'xl',
		...rest
	} = props;

	const mainColor = useMemo(() => {
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
	}, [color, colorMode]);
	const secondaryColor = useMemo(() => {
		return getColor({
			theme,
			colorMode: color === 'black' ? 'dark' : color === 'white' ? 'light' : colorMode,
			color: color === 'black' || color === 'white' ? 'gray' : color,
			type: colorMode
		});
	}, [color, colorMode]);

	switch (mode) {
		case 'fixed':
			return (
				<SpinnerCircularFixed
					{...rest}
					color={mainColor}
					secondaryColor={secondaryColor}
					thickness={thickness}
					speed={speed}
					size={theme.fontSizes[size]}
				/>
			);
		default:
			return (
				<SpinnerCircular
					{...rest}
					color={mainColor}
					secondaryColor={secondaryColor}
					thickness={thickness}
					speed={speed}
					size={theme.fontSizes[size]}
				/>
			);
	}
};

export default Spinner;
