import { ReactElement } from 'react';

import { ColorMode, useColorMode, useConst, Center } from '@chakra-ui/react';

import { IconProps } from './types';

import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';

const handleCheckFontStatus = (): boolean => {
	if (document.fonts.check("1rem 'Material Icons'")) {
		return true;
	} else {
		return false;
	}
};

const Icon = (props: IconProps): ReactElement => {
	const { colorMode: colorModeHook } = useColorMode();

	const {
		colorMode: colorModeProp,
		w,
		width,
		h,
		height,
		icon,
		type,
		color,
		background,
		borderRadius = 'none',
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const hasLoaded = useConst<boolean>(handleCheckFontStatus());

	return (
		<Center
			{...rest}
			as='span'
			className={`material-icons${type === 'outlined' ? '-outlined' : ''} ds-cl-icon`}
			w={w}
			width={width}
			h={h}
			height={height}
			maxWidth={w || width || '24px'}
			maxHeight={h || height || '24px'}
			borderRadius={!hasLoaded ? 'xs' : borderRadius}
			background={!hasLoaded ? `gray.${colorMode === 'light' ? 200 : 700}` : background}
			color={!hasLoaded ? 'transparent' : color}
			overflow='hidden'
			overflowX='hidden'
			overflowY='hidden'
			whiteSpace='nowrap'
			userSelect={!hasLoaded ? 'none' : 'auto'}
		>
			{icon}
		</Center>
	);
};

export default Icon;
