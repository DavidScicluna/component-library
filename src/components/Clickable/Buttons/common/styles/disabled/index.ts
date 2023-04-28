import { Style } from '../../../../../../common/types';
import { isLoading as defaultIsLoading } from '../../default/props';

import { ButtonDisabledStylingProps } from './types';

export default ({ isLoading = defaultIsLoading }: ButtonDisabledStylingProps): Style => ({
	cursor: 'default',
	pointerEvents: 'none',

	opacity: isLoading ? 1 : 0.5
});
