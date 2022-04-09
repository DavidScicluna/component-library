import React, { ReactElement } from 'react';

import { useColorMode, useConst, Center } from '@chakra-ui/react';

import { IconProps } from './types';

import * as fallback from '../../common/assets/fallback';

import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';

const Icon = (props: IconProps): ReactElement => {
	const { colorMode } = useColorMode();

	const { w, width, h, height, icon, type, color, background, borderRadius = 'none', ...rest } = props;

	const hasLoaded = useConst<boolean>(true);

	console.log(props);

	// alert('Roboto loaded? ' + document.fonts.check('material-icons'));

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
			borderRadius={!hasLoaded ? 'base' : borderRadius}
			backgroundImage={
				!hasLoaded ? `url(${colorMode === 'light' ? fallback.default.light : fallback.default.dark})` : ''
			}
			color={!hasLoaded ? `gray.${colorMode === 'light' ? 200 : 700}` : color}
			overflow='hidden'
			overflowX='hidden'
			overflowY='hidden'
			whiteSpace='nowrap'
		>
			{hasLoaded ? icon : ''}
		</Center>
	);
};

export default Icon;
