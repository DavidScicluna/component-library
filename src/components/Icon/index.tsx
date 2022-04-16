import { FC, useCallback } from 'react';

import { ColorMode, useColorMode, useBoolean, Center } from '@chakra-ui/react';

import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';

import { Type, IconProps } from './types';

const handleReturnURL = (type: Type): string => `1rem 'Material Icons${type === 'outlined' ? ' Outlined' : ''}'`;

const Icon: FC<IconProps> = (props) => {
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

	const [hasLoaded, setHasLoaded] = useBoolean(document.fonts.check(handleReturnURL(type)));

	const handleCheckFontStatus = useCallback(() => {
		if (document.fonts.check(handleReturnURL(type))) {
			return setHasLoaded.on();
		} else {
			return setHasLoaded.off();
		}
	}, [document.fonts, type]);

	const handleOnLoading = useCallback(() => {
		document.fonts.onloading = () => setHasLoaded.off();
		document.fonts.onloadingdone = () => handleCheckFontStatus();
	}, [document.fonts]);

	handleOnLoading();

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
