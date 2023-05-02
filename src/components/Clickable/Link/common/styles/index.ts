import memoize from 'micro-memoize';

import disabled from './disabled';
import link from './link';
import { LinkStyleProps, LinkStyleReturn } from './types';

export default memoize(({ theme }: LinkStyleProps): LinkStyleReturn => {
	return {
		link: link({ theme }),
		disabled: disabled()
	};
});
