import { AccordionDisabledStylingProps } from './types';

import { Style } from '../../../../../../../../../common/types';
import { getSizeConfig } from '../../../utils';

export default ({ theme }: AccordionDisabledStylingProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	return {
		cursor: 'not-allowed',
		pointerEvents: 'none',

		opacity: 0.5,

		borderTopWidth: `${border}px`,
		borderBottomWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	};
};
