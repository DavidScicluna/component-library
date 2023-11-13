import type { ElementType } from 'react';

import { __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { AnimationConfig, PolymorphicDefaultElement, ThemeEase, Undefinable } from '@common/types';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../constants';
import type { TransitionDelay, TransitionDuration, TransitionKey, TransitionProps, TransitionVariant } from '../types';

type UseTransitionResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	TransitionProps<Element>,
	'config' | 'delay' | 'duration' | 'easing' | 'in' | 'transition' | 'unmountOnExit'
>;

const useTransitionResponsiveValues = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseTransitionResponsiveValuesProps<Element>
) => {
	const {
		config: configProp,
		delay: delayProp,
		duration: durationProp = __DEFAULT_DURATION__,
		easing: easingProp = __DEFAULT_EASING__,
		in: isAnimatedProp = __DEFAULT_TRANSITION_IN__,
		transition: transitionProp = __DEFAULT_TRANSITION__,
		unmountOnExit: unmountOnExitProp = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
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
