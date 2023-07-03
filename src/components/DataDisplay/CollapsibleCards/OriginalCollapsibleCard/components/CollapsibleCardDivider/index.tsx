import { FC } from 'react';

import { useGetColor } from '../../../../../../common/hooks';
import Divider from '../../../../Divider';
import { useCollapsibleCardContext } from '../../common/hooks';

import { CollapsibleCardDividerProps } from './common/types';
import { getCollapsibleCardDividerColor, getCollapsibleCardDividerColorType } from './common/utils';

const CollapsibleCardDivider: FC<CollapsibleCardDividerProps> = (props) => {
	const { color, colorMode, variant } = useCollapsibleCardContext();

	const borderColor = useGetColor({
		color: getCollapsibleCardDividerColor({ color, variant }),
		colorMode,
		type: getCollapsibleCardDividerColorType({ color, variant })
	});

	return <Divider {...props} borderColor={borderColor} />;
};

export default CollapsibleCardDivider;
