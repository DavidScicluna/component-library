import { FC, useCallback } from 'react';

import { useColorMode, useBoolean, Center } from '@chakra-ui/react';

import { useInterval } from 'usehooks-ts';

import Skeleton from '../Skeleton';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	category as defaultCategory
} from './common/data/defaultPropValues';
import { checkFontStatus } from './common/utils';
import { IconProps } from './types';


const Icon: FC<IconProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		color = defaultColor,
		colorMode = colorModeHook,
		category = defaultCategory,
		w,
		width,
		h,
		height,
		icon,
		...rest
	} = props;

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
		<Skeleton color={color} colorMode={colorMode} isLoaded={hasLoaded} variant='rectangle'>
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
				overflowX='hidden'
				overflowY='hidden'
				whiteSpace='nowrap'
			>
				{icon}
			</Center>
		</Skeleton>
	);
};

export default Icon;
