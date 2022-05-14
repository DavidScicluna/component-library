import { FC } from 'react';

import { ModalBody as CUIModalBody } from '@chakra-ui/react';

import { ModalBodyProps } from './types';

const ModalBody: FC<ModalBodyProps> = ({ children, ...rest }) => {
	return (
		<CUIModalBody {...rest} width='100%'>
			{children}
		</CUIModalBody>
	);
};

export default ModalBody;
