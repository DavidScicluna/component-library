import { AnimationDelay, AnimationDuration, AnimationEasing } from '../types/animation';
import { getAnimationDelay, getAnimationDuration, getAnimationEasings } from '../utils/animation';

export const __DEFAULT_ANIMATION_DELAY__: AnimationDelay = getAnimationDelay();
export const __DEFAULT_ANIMATION_DURATION__: AnimationDuration = getAnimationDuration();
export const __DEFAULT_ANIMATION_EASING__: AnimationEasing = getAnimationEasings();
