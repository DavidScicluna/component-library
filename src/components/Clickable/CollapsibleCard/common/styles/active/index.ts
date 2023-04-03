import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../utils';

import { CollapsibleCardActiveStyleProps } from './types';

export default ({ theme }: CollapsibleCardActiveStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
