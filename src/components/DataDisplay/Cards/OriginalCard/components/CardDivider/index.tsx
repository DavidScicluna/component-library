import { FC } from 'react';

import { useGetColor } from '../../../../../../common/hooks';
import Divider from '../../../../Divider';
import { useCardContext } from '../../common/hooks';

import { CardDividerProps } from './common/types';
import { getCardDividerColor, getCardDividerColorType } from './common/utils';

const CardDivider: FC<CardDividerProps> = (props) => {
	const { color, colorMode, variant } = useCardContext();

	const borderColor = useGetColor({
		color: getCardDividerColor({ color, variant }),
		colorMode,
		type: getCardDividerColorType({ color, variant })
	});

	return <Divider {...props} borderColor={borderColor} />;
};

export default CardDivider;
