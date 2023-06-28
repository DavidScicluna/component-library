import { FC } from 'react';

import { ModalBody as CUIModalBody } from '@chakra-ui/react';

import { ModalBodyProps } from './common/types';

const ModalBody: FC<ModalBodyProps> = ({ children, ...rest }) => (
	<CUIModalBody width='100%' p={0} m={0} {...rest}>
		{children}
	</CUIModalBody>
);

export default ModalBody;
