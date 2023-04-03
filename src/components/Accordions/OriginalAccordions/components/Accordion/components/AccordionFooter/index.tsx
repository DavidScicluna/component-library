import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { AccordionFooterProps } from './types';

const AccordionFooter: FC<AccordionFooterProps> = ({ children, ...rest }) => {
	return (
		<Center {...rest} width='100%'>
			{children}
		</Center>
	);
};

export default AccordionFooter;
