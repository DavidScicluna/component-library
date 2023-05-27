import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalTitleProps } from './common/types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = ({ children, ...rest }) => {
	const { colorMode } = useConfirmModalContext();

	const color = useGetColor({ colorMode, type: 'text.primary' });

	return (
		<Text align='center' color={color} fontSize='2xl' fontWeight='bold' lineHeight='base' noOfLines={1} {...rest}>
			{children}
		</Text>
	);
};

export default ConfirmModalTitle;
