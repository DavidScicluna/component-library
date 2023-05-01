import { FC } from 'react';

import { Box, Center } from '@chakra-ui/react';

import HorizontalScroll from '../../../../../HorizontalScroll';
import { useHorizontalGridTabbedContext } from '../../common/hooks';

import { HorizontalGridTabbedScrollProps } from './common/types';

const HorizontalGridTabbedScroll: FC<HorizontalGridTabbedScrollProps> = (props) => {
	const { colorMode, onSetScroll, spacing: defaultSpacing } = useHorizontalGridTabbedContext();

	const { children, spacing = defaultSpacing } = props;

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
