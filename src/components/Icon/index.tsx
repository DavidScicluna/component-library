import { FC, useCallback } from 'react';

import { ColorMode, useColorMode, useBoolean, Center } from '@chakra-ui/react';

import { useInterval } from 'usehooks-ts';

import { category as defaultCategory } from './common/data/defaultPropValues';
import { checkFontStatus } from './common/utils';
import { IconProps } from './types';

const Icon: FC<IconProps> = (props) => {
	const { colorMode: colorModeHook } = useColorMode();

	const {
		colorMode: colorModeProp,
		w,
		width,
		h,
		height,
		icon,
		category = defaultCategory,
		color,
		background,
		borderRadius = 'none',
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const [hasLoaded, setHasLoaded] = useBoolean(checkFontStatus({ category }));

	const handleCheckFontStatus = useCallback((): void => {
		if (checkFontStatus({ category })) {
			setHasLoaded.on();
		} else {
			setHasLoaded.off();
		}
	}, [category]);

	useInterval(() => handleCheckFontStatus(), !hasLoaded ? 250 : null);

	return (
		<Center
			{...rest}
			as='span'
			className={`material-icons${category === 'outlined' ? '-outlined' : ''} ds-cl-icon`}
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
