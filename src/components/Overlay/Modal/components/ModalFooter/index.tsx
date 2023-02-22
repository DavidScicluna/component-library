import { FC } from 'react';

import { useMediaQuery, ModalFooter as CUIModalFooter, Stack } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { useModalContext } from '../../common/hooks';

import { ModalFooterProps } from './types';

const ModalFooter: FC<ModalFooterProps> = ({ renderCancel, renderAction, ...rest }) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { color, colorMode, onClose, spacing } = useModalContext();

	return (
		<CUIModalFooter
			as={Stack}
			width='100%'
			direction={isSm ? 'column-reverse' : 'row'}
			alignItems='center'
			justifyContent={isSm ? 'center' : 'space-between'}
			spacing={spacing}
			p={0}
			m={0}
			{...rest}
		>
			{renderCancel &&
				renderCancel({
					color: 'gray',
					colorMode,
					isFullWidth: isSm || !renderAction,
					onClick: typeof onClose === 'function' ? () => onClose() : undefined,
					size: 'md',
					variant: 'outlined'
				})}

			{renderAction &&
				renderAction({
					color,
					colorMode,
					isFullWidth: isSm || !renderCancel,
					size: 'md',
					variant: 'contained'
				})}
		</CUIModalFooter>
	);
};

export default ModalFooter;
