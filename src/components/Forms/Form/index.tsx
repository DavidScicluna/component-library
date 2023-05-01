import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { FormEvent, FormProps } from './common/types';

const Form: FC<FormProps> = ({ children, onSubmit, ...rest }) => {
	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();
		event.stopPropagation();

		onSubmit(event);
	};

	return (
		<Box as='form' width='100%' onSubmit={handleSubmit} {...rest}>
			{children}
		</Box>
	);
};

export default Form;
