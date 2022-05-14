import { FC, useContext } from 'react';

import { ModalFooter, HStack } from '@chakra-ui/react';

import { ConfirmModalFooterProps } from './types';

import { ConfirmModalContext } from '../..';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

const ConfirmModalFooter: FC<ConfirmModalFooterProps> = ({ renderCancel, renderAction, ...rest }) => {
	const { colorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	return (
		<ModalFooter as={HStack} width='100%' justifyContent='space-between' p={0} m={0} {...rest}>
			{renderCancel &&
				renderCancel({ color: 'gray', colorMode, isFullWidth: true, size: 'md', variant: 'outlined' })}

			{renderAction &&
				renderAction({ color: 'gray', colorMode, isFullWidth: true, size: 'md', variant: 'contained' })}
		</ModalFooter>
	);
};

export default ConfirmModalFooter;
