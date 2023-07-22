import { useContext } from 'react';

import {
	__DEFAULT_ANIMATION_DELAY__,
	__DEFAULT_ANIMATION_DURATION__,
	__DEFAULT_ANIMATION_EASING__
} from '../../../../common/constants';
import type { NoUndefinedField } from '../../../../common/types';
import { AnimationContext } from '../..';
import { AnimationContext as AnimationContextType } from '../types';

const useAnimationContext = (): NoUndefinedField<AnimationContextType> => {
	const {
		delay = __DEFAULT_ANIMATION_DELAY__,
		duration = __DEFAULT_ANIMATION_DURATION__,
		easing = __DEFAULT_ANIMATION_EASING__
	} = useContext<AnimationContextType>(AnimationContext);

	return { delay, duration, easing };
};

export default useAnimationContext;