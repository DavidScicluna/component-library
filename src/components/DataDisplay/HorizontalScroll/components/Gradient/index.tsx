import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { transparentize } from 'color2k';

import { useGetColor } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';
import { useHorizontalScrollContext } from '../../common/hooks';

import { GradientProps } from './common/types';

const Gradient: FC<GradientProps> = ({ direction, isVisible = false }) => {
	const { colorMode, arrowsWidth } = useHorizontalScrollContext();

	const background = useGetColor({ colorMode, type: 'background' });

	return (
		<Box as={Fade} width={arrowsWidth * 2} height='100%' in={isVisible}>
			<Box
				width='100%'
				height='100%'
				background={`linear-gradient(${direction === 'left' ? 90 : 270}deg, ${transparentize(
					background,
					0
				)} 0%, ${transparentize(background, 1)} 100%)`}
			/>
		</Box>
	);
};

export default Gradient;
