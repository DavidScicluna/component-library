import memoize from 'micro-memoize';

import disabled from './disabled';
import group from './group';
import { CheckboxStyleProps, CheckboxStyleReturn } from './types';

export default memoize((props: CheckboxStyleProps): CheckboxStyleReturn => {
	const { theme } = props;

	return {
		group: group({ theme }),
		disabled: disabled()
	};
});
