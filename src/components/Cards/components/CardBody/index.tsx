import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { CardBodyProps } from './types';

const CardBody: FC<CardBodyProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default CardBody;
