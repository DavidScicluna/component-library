import { CardActiveStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { getSizeConfig } from '../../utils';

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
