import { FC } from 'react';

import { Center, CenterProps as CardBodyProps } from '@chakra-ui/react';

const CardBody: FC<CardBodyProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default CardBody;
