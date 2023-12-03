import type { ElementType } from 'react';
import type { AnimationConfig, PolymorphicDefaultElement, ThemeEase, Undefinable } from '@common/types';
import type { TransitionDelay, TransitionDuration, TransitionKey, TransitionProps, TransitionVariant } from '../types';
type UseTransitionResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<TransitionProps<Element>, 'config' | 'delay' | 'duration' | 'easing' | 'in' | 'transition' | 'unmountOnExit'>;
declare const useTransitionResponsiveValues: <Element_1 extends ElementType = "div">(props: UseTransitionResponsiveValuesProps<Element_1>) => {
    config: Undefinable<AnimationConfig>;
    delay: Undefinable<TransitionDelay>;
    duration: TransitionDuration;
    easing: ThemeEase;
    in: boolean;
    transition: TransitionKey | TransitionVariant;
    unmountOnExit: boolean;
};
export default useTransitionResponsiveValues;
//# sourceMappingURL=useTransitionResponsiveValues.d.ts.map