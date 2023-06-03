import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import { useGetColor } from '../../../../../common/hooks';

import { CardTitleProps } from './common/types';

const CardTitle: FC<CardTitleProps> = ({ children, colorMode = defaultColorMode, ...rest }) => {
	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

	return (
		<Text align='left' fontSize='xl' fontWeight='bold' lineHeight='normal' noOfLines={1} {...rest} color={color}>
			{children}
		</Text>
	);
};

export default CardTitle;
