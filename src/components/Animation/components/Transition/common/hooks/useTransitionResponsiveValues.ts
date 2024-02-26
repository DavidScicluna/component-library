import { DEFAULT_DURATION, DEFAULT_EASING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { AnimationConfig, PolymorphicElementType, ThemeEase, Undefinable } from '@common/types';

import { DEFAULT_TRANSITION, DEFAULT_TRANSITION_IN, DEFAULT_TRANSITION_UNMOUNT_ON_EXIT } from '../constants';
import type { TransitionDelay, TransitionDuration, TransitionKey, TransitionProps, TransitionVariant } from '../types';

type UseTransitionResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<TransitionProps<Element>, 'config' | 'delay' | 'duration' | 'easing' | 'in' | 'transition' | 'unmountOnExit'>
>;

const useTransitionResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseTransitionResponsiveValuesProps<Element>
) => {
	const {
		config: configProp,
		delay: delayProp,
		duration: durationProp = DEFAULT_DURATION,
		easing: easingProp = DEFAULT_EASING,
		in: isAnimatedProp = DEFAULT_TRANSITION_IN,
		transition: transitionProp = DEFAULT_TRANSITION,
		unmountOnExit: unmountOnExitProp = DEFAULT_TRANSITION_UNMOUNT_ON_EXIT
	} = props;

	const config = useGetResponsiveValue<Undefinable<AnimationConfig>>(configProp);
	const delay = useGetResponsiveValue<Undefinable<TransitionDelay>>(delayProp);
	const duration = useGetResponsiveValue<TransitionDuration>(durationProp);
	const easing = useGetResponsiveValue<ThemeEase>(easingProp);
	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const transition = useGetResponsiveValue<TransitionKey | TransitionVariant>(transitionProp);
	const unmountOnExit = useGetResponsiveValue<boolean>(unmountOnExitProp);

	return {
		config,
		delay,
		duration,
		easing,
		in: isAnimated,
		transition,
		unmountOnExit
	};
};

export default useTransitionResponsiveValues;
