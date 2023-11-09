import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import {
	__DEFAULT_ANIMATION_DELAY__,
	__DEFAULT_ANIMATION_DURATION__,
	__DEFAULT_ANIMATION_EASING__
} from '@common/constants';

import { AnimationContext } from '@components/Provider/Provider';

import type { AnimationContext as AnimationContextType } from '../types';

const useAnimationContext = (): DeepRequired<AnimationContextType> => {
	const {
		delay = __DEFAULT_ANIMATION_DELAY__,
		duration = __DEFAULT_ANIMATION_DURATION__,
		easing = __DEFAULT_ANIMATION_EASING__
	} = useContext<AnimationContextType>(AnimationContext);

	return { delay, duration, easing };
};

export default useAnimationContext;
