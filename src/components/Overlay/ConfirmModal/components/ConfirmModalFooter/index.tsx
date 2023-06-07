import { FC } from 'react';

import { ModalFooter, VStack } from '@chakra-ui/react';

import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalFooterProps } from './common/types';

const ConfirmModalFooter: FC<ConfirmModalFooterProps> = (props) => {
	const { color, colorMode, onClose, spacing: defaultSpacing } = useConfirmModalContext();

	const { renderCancel, renderAction, spacing = defaultSpacing, ...rest } = props;

	return (
		<ModalFooter as={VStack} width='100%' justifyContent='space-between' p={0} m={0} spacing={spacing} {...rest}>
			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: true,
						size: 'md',
						variant: 'contained'
				  })
				: null}

			{renderCancel
				? renderCancel({
						color: 'gray',
						colorMode,
						isFullWidth: true,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
				  })
				: null}
		</ModalFooter>
	);
};

export default ConfirmModalFooter;
