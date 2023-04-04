import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';

import { CardActiveStyleProps } from './types';

export default ({ theme }: CardActiveStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: '0px',
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
