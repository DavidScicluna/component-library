import { FC, useContext } from 'react';

import { ModalFooter, HStack } from '@chakra-ui/react';


import { ConfirmModalContext } from '../..';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

import { ConfirmModalFooterProps } from './types';

const ConfirmModalFooter: FC<ConfirmModalFooterProps> = ({ renderCancel, renderAction, ...rest }) => {
	const { colorMode = defaultColorMode, spacing = defaultSpacing } =
		useContext<ConfirmModalContextType>(ConfirmModalContext);

	return (
		<ModalFooter as={HStack} width='100%' justifyContent='space-between' spacing={spacing} p={0} m={0} {...rest}>
			{renderCancel &&
				renderCancel({ color: 'gray', colorMode, isFullWidth: true, size: 'md', variant: 'outlined' })}

			{renderAction &&
				renderAction({ color: 'gray', colorMode, isFullWidth: true, size: 'md', variant: 'contained' })}
		</ModalFooter>
	);
};

export default ConfirmModalFooter;
