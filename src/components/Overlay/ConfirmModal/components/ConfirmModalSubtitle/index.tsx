import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalSubtitleProps } from './common/types';

const ConfirmModalSubtitle: FC<ConfirmModalSubtitleProps> = ({ children, ...rest }) => {
	const { colorMode } = useConfirmModalContext();

	const color = useGetColor({ colorMode, type: 'text.secondary' });

	return (
		<Text align='center' color={color} fontSize='sm' lineHeight='base' noOfLines={0} {...rest}>
			{children}
		</Text>
	);
};

export default ConfirmModalSubtitle;
