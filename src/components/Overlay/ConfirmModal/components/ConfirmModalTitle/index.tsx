import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalTitleProps } from './common/types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = ({ children, ...rest }) => {
	const { colorMode } = useConfirmModalContext();

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

	return (
		<Text align='center' fontSize='4xl' fontWeight='bold' lineHeight='base' noOfLines={1} {...rest} color={color}>
			{children}
		</Text>
	);
};

export default ConfirmModalTitle;
