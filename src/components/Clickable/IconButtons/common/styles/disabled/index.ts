import { Style } from '../../../../../../common/types';
import { isLoading as defaultIsLoading } from '../../default/props';

import { IconButtonDisabledStylingProps } from './types';

export default ({ isLoading = defaultIsLoading }: IconButtonDisabledStylingProps): Style => ({
	cursor: 'default',
	pointerEvents: 'none',

	opacity: isLoading ? 1 : 0.5
});
