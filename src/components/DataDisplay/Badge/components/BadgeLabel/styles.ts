import memoize from 'memoizee';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { BadgeSize } from '../../types';

type BadgeLabelStyleProps = {
	theme: Theme;
	size: BadgeSize;
};

export default memoize(
	({ theme, size = defaultSize }: BadgeLabelStyleProps): Style => ({
		userSelect: 'none',

		fontSize: theme.fontSizes[size],
		fontWeight: theme.fontWeights.semibold,
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
		lineHeight: 1.75,
		letterSpacing: '.8px'
	})
);
