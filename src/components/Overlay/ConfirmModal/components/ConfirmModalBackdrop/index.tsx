import { FC } from 'react';

import { Center, ModalOverlay } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import BackdropOverlay from '../../../BackdropOverlay';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalBackdropProps } from './common/types';

const ConfirmModalBackdrop: FC<ConfirmModalBackdropProps> = (props) => {
	const theme = useTheme();

	const { colorMode, isOpen } = useConfirmModalContext();

	return (
		<Center width='100vw' height='100vh' position='fixed' top={0} left={0} zIndex={theme.zIndices.modal}>
			<BackdropOverlay
				{...props}
				as={ModalOverlay}
				color='gray'
				colorMode={colorMode}
				width='inherit'
				height='inherit'
				opacity={isOpen ? 1 : 0}
			/>
		</Center>
	);
};

export default ConfirmModalBackdrop;