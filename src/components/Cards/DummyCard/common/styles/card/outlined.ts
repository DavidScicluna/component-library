import { DummyCardStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme }: DummyCardStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
