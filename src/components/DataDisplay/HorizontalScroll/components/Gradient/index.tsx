import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import LinearGradient from '../../../../Overlay/LinearGradient';
import Fade from '../../../../Transitions/Fade';
import { useHorizontalScrollContext } from '../../common/hooks';

import { GradientProps } from './common/types';

const Gradient: FC<GradientProps> = ({ direction, isVisible = false }) => {
	const { colorMode, arrowsWidth } = useHorizontalScrollContext();

	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });

	return (
		<Box as={Fade} width={arrowsWidth * 2} height='100%' in={isVisible}>
			<LinearGradient
				width='100%'
				height='100%'
				degrees={direction === 'left' ? 90 : 270}
				background={background}
			/>
		</Box>
	);
};

export default Gradient;
