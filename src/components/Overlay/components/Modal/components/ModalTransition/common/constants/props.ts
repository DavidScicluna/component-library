import { getAnimationDuration } from '@common/utils';

// TODO: Go over all /common/constants and extract them from root constants object instead of directly import
import { __DEFAULT_TRANSITION_EASINGS__ } from '@components/Animation/common/constants';
import { __DEFAULT_MODAL_DURATION__ } from '@components/Overlay/components/Modal/common/constants';

import type { ModalTransitionVariant } from '../types';

export const __DEFAULT_MODAL_TRANSITION_INITIAL_SCALE__ = 0.75;

export const __DEFAULT_MODAL_TRANSITION_VARIANT__: ModalTransitionVariant = 'pop';

export const __DEFAULT_MODAL_TRANSITION_TRANSITION__ = {
	enter: {
		duration: getAnimationDuration(__DEFAULT_MODAL_DURATION__),
		ease: __DEFAULT_TRANSITION_EASINGS__['ease-out']
	},
	exit: {
		duration: getAnimationDuration(__DEFAULT_MODAL_DURATION__),
		ease: __DEFAULT_TRANSITION_EASINGS__['ease-in']
	}
};
