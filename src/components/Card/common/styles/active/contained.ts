import { CardActiveStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { getSizeConfig } from '../../utils';

export default ({ theme }: CardActiveStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
