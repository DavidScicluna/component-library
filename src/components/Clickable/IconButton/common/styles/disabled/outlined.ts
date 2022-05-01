import { IconButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../utils';

export default ({ size = 'md' }: IconButtonDisabledStylingProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	return {
		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: 'transparent'
	};
};
