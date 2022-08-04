
import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { getSizeConfig } from '../../../../common/utils';

import { DummyCardStyleProps } from './types';

export default ({ theme }: DummyCardStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	const radius: Radius = 'lg';

	return {
		borderWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent,
		borderRadius: theme.radii[radius]
	};
};
