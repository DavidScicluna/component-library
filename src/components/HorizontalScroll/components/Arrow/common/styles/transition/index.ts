import { ArrowTransitionStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: ArrowTransitionStyleProps): Style => ({
	transition: `background ${theme.transition.duration.normal} ${theme.transition.easing['ease-in-out']}`
});
