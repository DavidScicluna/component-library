import { FC } from 'react';

import { ModalBody as CUIModalBody } from '@chakra-ui/react';

import { ModalBodyProps } from './types';

const ModalBody: FC<ModalBodyProps> = ({ children, ...rest }) => {
	return (
		<CUIModalBody width='100%' px={2} py={0} m={0} {...rest}>
			{children}
		</CUIModalBody>
	);
};

export default ModalBody;
