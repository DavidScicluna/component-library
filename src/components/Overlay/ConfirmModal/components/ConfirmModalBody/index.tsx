import { FC } from 'react';

import { ModalBody } from '@chakra-ui/react';

import { ConfirmModalBodyProps } from './types';

const ConfirmModalBody: FC<ConfirmModalBodyProps> = ({ children, ...rest }) => {
	return (
		<ModalBody width='100%' p={0} m={0} {...rest}>
			{children}
		</ModalBody>
	);
};

export default ConfirmModalBody;
