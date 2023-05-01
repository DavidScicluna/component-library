import { FC } from 'react';

import { Box, Center } from '@chakra-ui/react';

import HorizontalScroll from '../../../../../HorizontalScroll';
import { useHorizontalGridContext } from '../../common/hooks';

import { HorizontalGridScrollProps } from './common/types';

const HorizontalGridScroll: FC<HorizontalGridScrollProps> = (props) => {
	const { colorMode, onSetScroll, spacing: defaultSpacing } = useHorizontalGridContext();

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

export default HorizontalGridScroll;
