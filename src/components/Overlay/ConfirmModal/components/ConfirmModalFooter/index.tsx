import { FC } from 'react';

import { HStack,ModalFooter } from '@chakra-ui/react';

import { spacing as defaultSpacing } from '../../common/data/defaultPropValues';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalFooterProps } from './types';

const ConfirmModalFooter: FC<ConfirmModalFooterProps> = (props) => {
	const { color, colorMode, onClose } = useConfirmModalContext();

	const { renderCancel, renderAction, spacing = defaultSpacing, ...rest } = props;

	return (
		<ModalFooter as={HStack} width='100%' justifyContent='space-between' p={0} m={0} spacing={spacing} {...rest}>
			{renderCancel &&
				renderCancel({
					color: 'gray',
					colorMode,
					isFullWidth: true,
					onClick: typeof onClose === 'function' ? () => onClose() : undefined,
					size: 'md',
					variant: 'outlined'
				})}

			{renderAction &&
				renderAction({
					color,
					colorMode,
					isFullWidth: true,
					size: 'md',
					variant: 'contained'
				})}
		</ModalFooter>
	);
};

export default ConfirmModalFooter;
