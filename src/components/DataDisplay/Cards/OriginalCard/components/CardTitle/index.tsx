import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import { useCardContext } from '../../common/hooks';

import { CardTitleProps } from './common/types';

const CardTitle: FC<CardTitleProps> = ({ children, ...rest }) => {
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
				? 'text.primary'
				: 'color'
	});

	return (
		<Text
			align='left'
			fontSize='xl'
			fontWeight='bold'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
			color={textColor}
		>
			{children}
		</Text>
	);
};

export default CardTitle;
