import { FC, useContext } from 'react';

import { ModalFooter, HStack } from '@chakra-ui/react';

import { ConfirmModalContext } from '../..';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

import { ConfirmModalFooterProps } from './types';

const ConfirmModalFooter: FC<ConfirmModalFooterProps> = (props) => {
	const { colorMode = defaultColorMode, onClose } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const { renderCancel, renderAction, spacing = defaultSpacing, ...rest } = props;

	return (
		<ModalFooter as={HStack} width='100%' justifyContent='space-between' p={0} m={0} spacing={spacing} {...rest}>
			{renderCancel &&
				renderCancel({
					color: 'gray',
					colorMode,
					isFullWidth: true,
					onClick: () => onClose(),
					size: 'md',
					variant: 'outlined'
				})}

			{renderAction &&
				renderAction({ color: 'gray', colorMode, isFullWidth: true, size: 'md', variant: 'contained' })}
		</ModalFooter>
	);
};

export default ConfirmModalFooter;
