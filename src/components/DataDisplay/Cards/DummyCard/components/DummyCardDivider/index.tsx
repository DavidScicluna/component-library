import { FC } from 'react';

import { useGetColor } from '../../../../../../common/hooks';
import Divider from '../../../../Divider';
import {
	getCardDividerColor,
	getCardDividerColorType
} from '../../../OriginalCard/components/CardDivider/common/utils';
import { useDummyCardContext } from '../../common/hooks';

import { DummyCardDividerProps } from './common/types';

const DummyCardDivider: FC<DummyCardDividerProps> = (props) => {
	const { color, colorMode, variant } = useDummyCardContext();

	const borderColor = useGetColor({
		color: getCardDividerColor({ color, variant }),
		colorMode,
		type: getCardDividerColorType({ color, variant })
	});

	return <Divider {...props} borderColor={borderColor} />;
};

export default DummyCardDivider;
