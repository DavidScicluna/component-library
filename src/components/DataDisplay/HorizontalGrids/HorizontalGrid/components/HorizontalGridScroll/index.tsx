import { FC } from 'react';

import { Center, Box } from '@chakra-ui/react';

import HorizontalScroll from '../../../../../HorizontalScroll';
import { useHorizontalGridContext } from '../../common/hooks';

import { HorizontalGridScrollProps } from './types';

const HorizontalGridScroll: FC<HorizontalGridScrollProps> = ({ children, spacing = 2 }) => {
	const { colorMode, onSetScroll } = useHorizontalGridContext();

	return (
		<HorizontalScroll
			colorMode={colorMode}
			renderDivider={() => <Center mr={spacing} />}
			LeftArrow={<Box />}
			RightArrow={<Box />}
			onInit={onSetScroll}
			onUpdate={onSetScroll}
		>
			{children}
		</HorizontalScroll>
	);
};

export default HorizontalGridScroll;
