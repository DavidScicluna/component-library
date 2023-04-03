import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { CardFooterProps } from './types';

const CardFooter: FC<CardFooterProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default CardFooter;
