import { DummyButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';

export default ({ theme }: DummyButtonStyleProps): Style => {
	const radius: Radius = 'none';

	return {
		'borderWidth': 0,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'& .ds-cl-dummy-button-skeleton-icon': {
			borderRadius: theme.radii[radius]
		}
	};
};
