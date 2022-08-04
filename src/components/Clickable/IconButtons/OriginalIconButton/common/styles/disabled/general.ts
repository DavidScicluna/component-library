
import { Style } from '../../../../../../../common/types';
import { isLoading as defaultIsLoading } from '../../../../common/data/defaultPropValues';

import { IconButtonDisabledStylingProps } from './types';

export default ({ isLoading = defaultIsLoading }: IconButtonDisabledStylingProps): Style => ({
	cursor: 'default',
	pointerEvents: 'none',

	opacity: isLoading ? 1 : 0.5
});
