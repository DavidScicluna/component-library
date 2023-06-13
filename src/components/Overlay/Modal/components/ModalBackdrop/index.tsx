import { FC } from 'react';

import { Center, ModalOverlay } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import BackdropOverlay from '../../../BackdropOverlay';
import { useModalContext } from '../../common/hooks';

import { ModalBackdropProps } from './common/types';

const ModalBackdrop: FC<ModalBackdropProps> = (props) => {
	const theme = useTheme();

	const { colorMode, isOpen } = useModalContext();

	return (
		<Center width='100vw' height='100vh' position='fixed' top={0} left={0} z-index={theme.zIndices.modal}>
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

export default ModalBackdrop;
