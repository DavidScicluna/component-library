import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { DummyHorizontalGridTabbedScrollProps } from './types';

const DummyHorizontalGridTabbedScroll: FC<DummyHorizontalGridTabbedScrollProps> = ({ children, spacing = 2 }) => {
	return (
		<HStack width='fit-content' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
			{children}
		</HStack>
	);
};

export default DummyHorizontalGridTabbedScroll;
