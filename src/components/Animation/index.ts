import type { AnimatePresenceProps } from './components/AnimatePresence';
import { AnimatePresence } from './components/AnimatePresence';
import type {
	TransitionDelay,
	TransitionDuration,
	TransitionKey,
	TransitionOtherProps,
	TransitionProps,
	TransitionRef,
	TransitionVariant,
	TransitionVariantKey,
	TransitionVariants
} from './components/Transition';
import {
	constants as transition_constants,
	data as transition_data,
	hooks as transition_hooks,
	keys as transition_keys,
	Transition
} from './components/Transition';

// Constants
export const constants = { ...transition_constants };

// Data
export const data = { ...transition_data };

// Hooks
export const hooks = { ...transition_hooks };

// Keys
export const keys = { ...transition_keys };

// Components
export { AnimatePresence, Transition };

// Component Types
export type {
	AnimatePresenceProps,
	TransitionDelay,
	TransitionDuration,
	TransitionKey,
	TransitionOtherProps,
	TransitionProps,
	TransitionRef,
	TransitionVariant,
	TransitionVariantKey,
	TransitionVariants
};
