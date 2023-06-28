import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { transparentize } from 'color2k';

import { useGetColor } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';

import { LinearGradientProps, LinearGradientRef } from './common/types';

const LinearGradient = forwardRef<LinearGradientRef, LinearGradientProps>(function LinearGradient(
	props,
	ref
): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { color = defaultColor, colorMode = defaultColorMode, degrees, ...rest } = props;

	const defaultBackground = useGetColor({ color, colorMode, type: 'background' });

	return (
		<Box
			{...rest}
			ref={ref}
			background={`linear-gradient(${degrees}deg, ${transparentize(
				props?.background || defaultBackground,
				0
			)} 0%, ${transparentize(props?.background || defaultBackground, 1)} 100%)`}
		/>
	);
});

export default LinearGradient;
