import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';

import { DummyCardStyleProps } from './types';

export default ({ theme }: DummyCardStyleProps): Style => {
	const radius: Radius = 'none';

	return {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent,
		borderRadius: theme.radii[radius],

		p: '0 !important'
	};
};
