import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { CardBodyProps } from './common/types';

const CardBody: FC<CardBodyProps> = ({ children, ...rest }) => (
	<Center {...rest} width='100%'>
		{children}
	</Center>
);

export default CardBody;
