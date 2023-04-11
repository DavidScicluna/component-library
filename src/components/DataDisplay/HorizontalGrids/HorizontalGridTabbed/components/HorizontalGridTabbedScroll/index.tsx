import { FC } from 'react';

import { Center, Box } from '@chakra-ui/react';

import HorizontalScroll from '../../../../../HorizontalScroll';
import { useHorizontalGridTabbedContext } from '../../common/hooks';

import { HorizontalGridTabbedScrollProps } from './types';

const HorizontalGridTabbedScroll: FC<HorizontalGridTabbedScrollProps> = ({ children, spacing = 2 }) => {
	const { colorMode, onSetScroll } = useHorizontalGridTabbedContext();

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

export default HorizontalGridTabbedScroll;
