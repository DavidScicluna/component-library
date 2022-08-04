import { Style } from '../../../../../../../common/types';

import { ArrowTransitionStyleProps } from './types';

export default ({ theme }: ArrowTransitionStyleProps): Style => ({
	transition: `background ${theme.transition.duration.normal} ${theme.transition.easing['ease-in-out']}`
});
