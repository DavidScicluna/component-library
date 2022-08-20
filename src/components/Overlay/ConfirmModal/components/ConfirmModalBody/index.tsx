import { FC } from 'react';

import { ModalBody, VStack } from '@chakra-ui/react';

import { ConfirmModalBodyProps } from './types';

const ConfirmModalBody: FC<ConfirmModalBodyProps> = ({ children, ...rest }) => {
	return (
		<VStack
			as={ModalBody}
			width='100%'
			alignItems='center'
			justifyContent='center'
			p={0}
			m={0}
			spacing={0}
			{...rest}
		>
			{children}
		</VStack>
	);
};

export default ConfirmModalBody;
