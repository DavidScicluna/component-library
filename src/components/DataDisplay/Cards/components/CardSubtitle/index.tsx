import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';

import { CardSubtitleProps } from './common/types';

const CardSubtitle: FC<CardSubtitleProps> = ({ children, colorMode = defaultColorMode }) => {
	const theme = useTheme();

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='sm'
			lineHeight='normal'
			noOfLines={1}
		>
			{children}
		</Text>
	);
};

export default CardSubtitle;
