import type { AnimationEasing } from '@common/types/animation';
import type { Ease, EasingsArr } from '@common/types/theme';
import { getAnimationDuration, getAnimationEasings } from '@common/utils/animation';

export const __DEFAULT_ANIMATION_IN__ = false;
export const __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__ = true;

export const __DEFAULT_ANIMATION_EASINGS__ = (['ease-in', 'ease-out', 'ease-in-out'] as EasingsArr)
	.map((ease) => ({ key: ease, value: getAnimationEasings(ease) }))
	.reduce((easings, ease) => ({ ...easings, [ease.key]: ease.value }), {}) as Record<Ease, AnimationEasing>;

export const __DEFAULT_ANIMATION_TRANSITION__ = {
	enter: {
		duration: getAnimationDuration(),
		ease: __DEFAULT_ANIMATION_EASINGS__['ease-out']
	},
	exit: {
		duration: getAnimationDuration(),
		ease: __DEFAULT_ANIMATION_EASINGS__['ease-in']
	}
};

export const __DEFAULT_ANIMATION_TRANSITION_END__ = {
	enter: {},
	exit: {}
};

export const __DEFAULT_ANIMATION_TRANSITION_CONFIG__ = {
	initial: 'exit',
	animate: 'enter',
	exit: 'exit'
};
