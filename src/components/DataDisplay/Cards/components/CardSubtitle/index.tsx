import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import { useGetColor } from '../../../../../common/hooks';

import { CardSubtitleProps } from './common/types';

const CardSubtitle: FC<CardSubtitleProps> = ({ children, colorMode = defaultColorMode }) => {
	const color = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	return (
		<Text align='left' color={color} fontSize='sm' lineHeight='normal' noOfLines={1}>
			{children}
		</Text>
	);
};

export default CardSubtitle;
