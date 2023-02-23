import memoize from 'memoizee';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { BadgeSize } from '../../types';

type BadgeIconStyleProps = {
	theme: Theme;
	size: BadgeSize;
};

export default memoize(
	({ theme, size = defaultSize }: BadgeIconStyleProps): Style => ({
		width: theme.fontSizes[size],
		height: theme.fontSizes[size],
		maxWidth: theme.fontSizes[size],
		maxHeight: theme.fontSizes[size],

		fontSize: theme.fontSizes[size],

		userSelect: 'none'
	})
);
