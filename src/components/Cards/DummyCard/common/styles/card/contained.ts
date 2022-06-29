import { DummyCardStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme }: DummyCardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
