import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../utils';

import { CollapsibleCardDisabledStylingProps } from './types';

export default ({ theme }: CollapsibleCardDisabledStylingProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		cursor: 'default',
		pointerEvents: 'none',

		opacity: 0.5,

		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
