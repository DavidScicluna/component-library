import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { FormProps } from './types';

const Form: FC<FormProps> = ({ children, ...rest }) => {
	return (
		<Center as='form' width='100%' {...rest}>
			{children}
		</Center>
	);
};

export default Form;
