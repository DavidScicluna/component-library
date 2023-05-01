import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { useDummyHorizontalGridTabbedContext } from '../../common/hooks';

import { DummyHorizontalGridTabbedScrollProps } from './common/types';

const DummyHorizontalGridTabbedScroll: FC<DummyHorizontalGridTabbedScrollProps> = (props) => {
	const { spacing: defaultSpacing } = useDummyHorizontalGridTabbedContext();

	const { children, spacing = defaultSpacing } = props;

	return (
		<HStack width='fit-content' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
			{children}
		</HStack>
	);
};

export default DummyHorizontalGridTabbedScroll;
