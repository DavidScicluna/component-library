import { Style } from '../../../../../../../../common/types';
import { getSizeConfig } from '../../utils';

import { AccordionActiveStyleProps } from './types';

export default ({ theme }: AccordionActiveStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
