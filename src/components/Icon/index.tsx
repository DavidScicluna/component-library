import { ReactElement, useCallback, useEffect } from 'react';

import { ColorMode, useColorMode, useBoolean, Center } from '@chakra-ui/react';

import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';

import { debounce } from 'lodash';

import { IconProps } from './types';

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

	const [hasLoaded, setHasLoaded] = useBoolean(document.fonts.check("1rem 'Material Icons'"));

	const handleCheckFontStatus = useCallback(
		debounce(() => {
			if (document.fonts.check("1rem 'Material Icons'")) {
				return setHasLoaded.on();
			} else {
				return setHasLoaded.off();
			}
		}, 250),
		[document.fonts]
	);

	useEffect(() => handleCheckFontStatus(), [document.fonts]);

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
