import { FC } from 'react';

import { ModalOverlay } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';
import BackdropOverlay from '../../../BackdropOverlay';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalBackdropProps } from './common/types';

const ConfirmModalBackdrop: FC<ConfirmModalBackdropProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isOpen } = useConfirmModalContext();

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

export default ConfirmModalBackdrop;
