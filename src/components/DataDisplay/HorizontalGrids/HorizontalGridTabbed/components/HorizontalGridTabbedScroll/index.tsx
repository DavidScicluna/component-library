import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import HorizontalScroll from '../../../../HorizontalScroll';
import { useHorizontalGridTabbedContext } from '../../common/hooks';

import { HorizontalGridTabbedScrollProps } from './common/types';

const HorizontalGridTabbedScroll: FC<HorizontalGridTabbedScrollProps> = (props) => {
	const { colorMode, onSetScroll, spacing: defaultSpacing } = useHorizontalGridTabbedContext();

	const { children, spacing = defaultSpacing } = props;

	return (
		<HorizontalScroll
			colorMode={colorMode}
			renderDivider={() => <Center mr={spacing} />}
			onInit={onSetScroll}
			onUpdate={onSetScroll}
			variant='hidden'
		>
			{children}
		</HorizontalScroll>
	);
};

export default HorizontalGridTabbedScroll;
