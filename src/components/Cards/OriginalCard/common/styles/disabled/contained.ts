import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';

import { CardDisabledStylingProps } from './types';

export default ({ theme }: CardDisabledStylingProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
