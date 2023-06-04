import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useCardContext } from '../../common/hooks';
import CardDivider from '../CardDivider';

import { CardStackProps } from './common/types';

const CardStack: FC<CardStackProps> = ({ children, ...rest }) => {
	const { isDivisible, spacing } = useCardContext();

	return (
		<VStack
			width='100%'
			height='100%'
			overflowY='hidden'
			overflowX='hidden'
			divider={isDivisible ? <CardDivider /> : undefined}
			spacing={spacing}
			{...rest}
		>
			{children}
		</VStack>
	);
};

export default CardStack;
