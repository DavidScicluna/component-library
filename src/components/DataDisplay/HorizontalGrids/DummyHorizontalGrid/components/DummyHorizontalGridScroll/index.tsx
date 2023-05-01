import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { useDummyHorizontalGridContext } from '../../common/hooks';

import { DummyHorizontalGridScrollProps } from './common/types';

const DummyHorizontalGridScroll: FC<DummyHorizontalGridScrollProps> = (props) => {
	const { spacing: defaultSpacing } = useDummyHorizontalGridContext();

	const { children, spacing = defaultSpacing } = props;

	return (
		<HStack width='fit-content' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
			{children}
		</HStack>
	);
};

export default DummyHorizontalGridScroll;
