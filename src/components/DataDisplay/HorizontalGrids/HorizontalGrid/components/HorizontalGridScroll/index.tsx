import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import HorizontalScroll from '../../../../HorizontalScroll';
import { useHorizontalGridContext } from '../../common/hooks';

import { HorizontalGridScrollProps } from './common/types';

const HorizontalGridScroll: FC<HorizontalGridScrollProps> = (props) => {
	const { colorMode, onSetScroll, spacing: defaultSpacing } = useHorizontalGridContext();

	const { children, spacing = defaultSpacing } = props;

	return (
		<HorizontalScroll
			colorMode={colorMode}
			renderDivider={() => <Box mr={spacing} />}
			onInit={onSetScroll}
			onUpdate={onSetScroll}
			variant='hidden'
		>
			{children}
		</HorizontalScroll>
	);
};

export default HorizontalGridScroll;
