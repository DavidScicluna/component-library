import { FC } from 'react';

import { ColorMode, useColorMode, Box } from '@chakra-ui/react';

import { DividerProps } from './types';

const Divider: FC<DividerProps> = ({ colorMode: colorModeProp, orientation = 'horizontal', ...rest }) => {
	const { colorMode: colorModeHook } = useColorMode();

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<Box
			width={orientation === 'horizontal' ? '100%' : '2px'}
			height={orientation === 'horizontal' ? '2px' : '100%'}
			backgroundColor={`gray.${colorMode === 'light' ? 200 : 700}`}
			{...rest}
			border='none'
		/>
	);
};

export default Divider;
