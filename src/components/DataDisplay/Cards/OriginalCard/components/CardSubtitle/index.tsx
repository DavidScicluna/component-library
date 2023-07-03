import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import { useCardContext } from '../../common/hooks';

import { CardSubtitleProps } from './common/types';

const CardSubtitle: FC<CardSubtitleProps> = ({ children, ...rest }) => {
	const { color, colorMode, variant } = useCardContext();

	const textColor = useGetColor({
		color:
			variant === 'contained' || variant === 'monochrome' || color === 'black' || color === 'white'
				? 'gray'
				: color,
		colorMode,
		type:
			variant === 'contained'
				? colorMode === 'light'
					? 'darkest'
					: 'lightest'
				: variant === 'light'
				? color === 'black'
					? colorMode === 'light'
						? 'dark'
						: 'light'
					: color === 'white'
					? colorMode === 'light'
						? 'light'
						: 'dark'
					: colorMode === 'light'
					? 'lightest'
					: 'darkest'
				: variant === 'monochrome'
				? 'text.secondary'
				: 'color'
	});

	return (
		<Text align='left' fontSize='sm' lineHeight='normal' noOfLines={1} {...rest} color={textColor}>
			{children}
		</Text>
	);
};

export default CardSubtitle;
