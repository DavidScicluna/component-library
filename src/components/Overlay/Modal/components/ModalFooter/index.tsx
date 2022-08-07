import { FC, useContext } from 'react';

import { ModalFooter as CUIModalFooter, HStack } from '@chakra-ui/react';

import { ModalContext } from '../..';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../common/data/defaultPropValues';
import { ModalContext as ModalContextType } from '../../types';

import { ModalFooterProps } from './types';

const ModalFooter: FC<ModalFooterProps> = ({ renderCancel, renderAction, ...rest }) => {
	const {
		colorMode = defaultColorMode,
		onClose,
		spacing = defaultSpacing
	} = useContext<ModalContextType>(ModalContext);

	return (
		<CUIModalFooter as={HStack} width='100%' justifyContent='space-between' spacing={spacing} p={0} m={0} {...rest}>
			{renderCancel &&
				renderCancel({
					color: 'gray',
					colorMode,
					onClick: () => onClose(),
					size: 'md',
					variant: 'outlined'
				})}

			{renderAction && renderAction({ color: 'gray', colorMode, size: 'md', variant: 'contained' })}
		</CUIModalFooter>
	);
};

export default ModalFooter;
