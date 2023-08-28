import { getAnimationDuration } from '@common/utils';

// TODO: Go over all /common/constants and extract them from root constants object instead of directly import
import { constants } from '@components/Animation';
import { __DEFAULT_CONFIRM_MODAL_DURATION__ } from '@components/Overlay/components/ConfirmModal/common/constants';

import type { ConfirmModalTransitionVariant } from '../types';

const { __DEFAULT_ANIMATION_EASINGS__ } = constants;

export const __DEFAULT_CONFIRM_MODAL_TRANSITION_INITIAL_SCALE__ = 0.75;

export const __DEFAULT_CONFIRM_MODAL_TRANSITION_VARIANT__: ConfirmModalTransitionVariant = 'pop';

export const __DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__ = {
	enter: {
		duration: getAnimationDuration(__DEFAULT_CONFIRM_MODAL_DURATION__),
		ease: __DEFAULT_ANIMATION_EASINGS__['ease-out']
	},
	exit: {
		duration: getAnimationDuration(__DEFAULT_CONFIRM_MODAL_DURATION__),
		ease: __DEFAULT_ANIMATION_EASINGS__['ease-in']
	}
};
