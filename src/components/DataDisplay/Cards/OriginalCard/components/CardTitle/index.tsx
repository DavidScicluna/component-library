import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import { useCardContext } from '../../common/hooks';

import { CardTitleProps } from './common/types';
import { getCardTitleColor, getCardTitleColorType } from './common/utils';

const CardTitle: FC<CardTitleProps> = ({ children, ...rest }) => {
	const { color, colorMode, variant } = useCardContext();

	const textColor = useGetColor({
		color: getCardTitleColor({ color, colorMode, variant }),
		colorMode,
		type: getCardTitleColorType({ color, colorMode, variant })
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
