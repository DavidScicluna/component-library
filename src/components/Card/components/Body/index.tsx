import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { BodyProps } from './types';

const Body: FC<BodyProps> = (props) => {
	const { children } = props;

	return <Center width='100%'>{children}</Center>;
};

export default Body;
