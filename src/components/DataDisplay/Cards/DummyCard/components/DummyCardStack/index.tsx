import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useDummyCardContext } from '../../common/hooks';
import DummyCardDivider from '../DummyCardDivider';

import { DummyCardStackProps } from './common/types';

const DummyCardStack: FC<DummyCardStackProps> = ({ children, ...rest }) => {
	const { isDivisible, spacing } = useDummyCardContext();

	return (
		<VStack
			width='100%'
			height='100%'
			overflowY='hidden'
			overflowX='hidden'
			divider={isDivisible ? <DummyCardDivider /> : undefined}
			spacing={spacing}
			{...rest}
		>
			{children}
		</VStack>
	);
};

export default DummyCardStack;
