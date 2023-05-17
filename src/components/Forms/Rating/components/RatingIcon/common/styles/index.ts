import memoize from 'micro-memoize';

import active from './active';
import disabled from './disabled';
import rating from './rating';
import readOnly from './readOnly';
import { RatingIconStyleProps, RatingIconStyleReturn } from './types';

export default memoize((props: RatingIconStyleProps): RatingIconStyleReturn => {
	const { theme } = props;

	return {
		rating: rating({ theme }),
		active: active(),
		disabled: disabled(),
		readOnly: readOnly()
	};
});
