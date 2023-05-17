import memoize from 'micro-memoize';

import disabled from './disabled';
import group from './group';
import { RadioStyleProps, RadioStyleReturn } from './types';

export default memoize((props: RadioStyleProps): RadioStyleReturn => {
	const { theme } = props;

	return {
		group: group({ theme }),
		disabled: disabled()
	};
});
