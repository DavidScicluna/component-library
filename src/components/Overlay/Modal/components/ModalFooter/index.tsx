import { FC } from 'react';

import { ModalFooter as CUIModalFooter, HStack } from '@chakra-ui/react';

import { useModalContext } from '../../common/hooks';

import { ModalFooterProps } from './types';

const ModalFooter: FC<ModalFooterProps> = ({ renderCancel, renderAction, ...rest }) => {
	const { color, colorMode, onClose, spacing } = useModalContext();

	return (
		<CUIModalFooter as={HStack} width='100%' justifyContent='space-between' spacing={spacing} p={0} m={0} {...rest}>
			{renderCancel &&
				renderCancel({
					color: 'gray',
					colorMode,
					onClick: typeof onClose === 'function' ? () => onClose() : undefined,
					size: 'md',
					variant: 'outlined'
				})}

			{renderAction && renderAction({ color, colorMode, size: 'md', variant: 'contained' })}
		</CUIModalFooter>
	);
};

export default ModalFooter;
