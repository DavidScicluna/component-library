import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import { useGetColor } from '../../../../../common/hooks';

import { CardSubtitleProps } from './common/types';

const CardSubtitle: FC<CardSubtitleProps> = ({ children, colorMode = defaultColorMode, ...rest }) => {
	const color = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	return (
		<Text align='left' fontSize='sm' lineHeight='normal' noOfLines={1} {...rest} color={color}>
			{children}
		</Text>
	);
};

export default CardSubtitle;
