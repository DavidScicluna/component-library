import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../common/hooks';
import { useCardContext } from '../../common/hooks';

import { CardSubtitleProps } from './common/types';
import { getCardSubtitleColor, getCardSubtitleColorType } from './common/utils';

const CardSubtitle: FC<CardSubtitleProps> = ({ children, ...rest }) => {
	const { color, colorMode, variant } = useCardContext();

	const textColor = useGetColor({
		color: getCardSubtitleColor({ color, colorMode, variant }),
		colorMode,
		type: getCardSubtitleColorType({ color, colorMode, variant })
	});

	return (
		<Text align='left' fontSize='sm' lineHeight='normal' noOfLines={1} {...rest} color={textColor}>
			{children}
		</Text>
	);
};

export default CardSubtitle;
