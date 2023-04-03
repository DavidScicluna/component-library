import { ReactElement } from 'react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import { DividerProps as CollapsibleCardDividerProps } from '../../../../Divider/types';
import { useCollapsibleCardContext } from '../../common/hooks';

const CollapsibleCardDivider = (props: CollapsibleCardDividerProps): ReactElement => {
	const theme = useTheme();

	const { color, colorMode, isDisabled, isLight } = useCollapsibleCardContext();

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color,
				type: isDisabled
					? isLight
						? 'divider'
						: 'text.secondary'
					: isLight
					? 'divider'
					: color === 'gray'
					? 'text.secondary'
					: 'color'
			})}
		/>
	);
};

export default CollapsibleCardDivider;
