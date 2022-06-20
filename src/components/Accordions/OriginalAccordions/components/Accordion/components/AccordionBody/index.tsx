import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { AccordionBodyProps } from './types';

const AccordionBody: FC<AccordionBodyProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default AccordionBody;
