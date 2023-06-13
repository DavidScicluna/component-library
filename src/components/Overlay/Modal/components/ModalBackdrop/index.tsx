import { FC } from 'react';

import { ModalOverlay } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';
import BackdropOverlay from '../../../BackdropOverlay';
import { useModalContext } from '../../common/hooks';

import { ModalBackdropProps } from './common/types';

const ModalBackdrop: FC<ModalBackdropProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isOpen } = useModalContext();

	return (
		<Fade in={isOpen}>
			<BackdropOverlay
				{...props}
				as={ModalOverlay}
				color={color}
				colorMode={colorMode}
				position='fixed'
				top={0}
				left={0}
				width='100vw'
				height='100vh'
				z-index={theme.zIndices.modal}
			/>
		</Fade>
	);
};

export default ModalBackdrop;
