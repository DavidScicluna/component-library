import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import { DEFAULT_ANIMATION_DELAY, DEFAULT_ANIMATION_DURATION, DEFAULT_ANIMATION_EASING } from '@common/constants';

import { AnimationContext } from '@components/Provider/Provider';

import type { AnimationContext as AnimationContextType } from '../types';

const useAnimationContext = (): DeepRequired<AnimationContextType> => {
	const {
		delay = DEFAULT_ANIMATION_DELAY,
		duration = DEFAULT_ANIMATION_DURATION,
		easing = DEFAULT_ANIMATION_EASING
	} = useContext<AnimationContextType>(AnimationContext);

	return { delay, duration, easing };
};

export default useAnimationContext;
