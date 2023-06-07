import { FC } from 'react';

import { ModalFooter as CUIModalFooter, Stack, useMediaQuery } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { useModalContext } from '../../common/hooks';

import { ModalFooterProps } from './common/types';

const ModalFooter: FC<ModalFooterProps> = (props) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { color, colorMode, onClose, spacing: defaultSpacing } = useModalContext();

	const { renderCancel, renderAction, spacing = defaultSpacing, ...rest } = props;

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
			{renderCancel
				? renderCancel({
						color: 'gray',
						colorMode,
						isFullWidth: isSm || !renderAction,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
				  })
				: null}

			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: isSm || !renderCancel,
						size: 'md',
						variant: 'contained'
				  })
				: null}
		</CUIModalFooter>
	);
};

export default ModalFooter;
