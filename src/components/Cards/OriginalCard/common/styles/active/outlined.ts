import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';

import { CardActiveStyleProps } from './types';

export default ({ theme }: CardActiveStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
