import memoize from 'micro-memoize';

import disabled from './disabled';
import group from './group';
import { SwitchStyleProps, SwitchStyleReturn } from './types';

export default memoize((props: SwitchStyleProps): SwitchStyleReturn => {
	const { theme } = props;

	return {
		group: group({ theme }),
		disabled: disabled()
	};
});
