import { ButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../utils';

export default ({ size = 'md' }: ButtonDisabledStylingProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform;

	return {
		borderTopWidth: `${transform}px`,
		borderBottomWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent'
	};
};
