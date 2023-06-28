import memoize from 'micro-memoize';

import disabled from './disabled';
import link from './link';
import { LinkStyleProps, LinkStyleReturn } from './types';

export default memoize(
	({ theme }: LinkStyleProps): LinkStyleReturn => ({
		link: link({ theme }),
		disabled: disabled()
	})
);
