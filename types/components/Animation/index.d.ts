/// <reference types="react" />
import type { AnimatePresenceProps } from './components/AnimatePresence';
import { AnimatePresence } from './components/AnimatePresence';
import type { TransitionDelay, TransitionDuration, TransitionKey, TransitionOtherProps, TransitionProps, TransitionRef, TransitionVariant, TransitionVariantKey, TransitionVariants } from './components/Transition';
import { Transition } from './components/Transition';
export declare const constants: {
    __DEFAULT_TRANSITION__: TransitionKey;
    __DEFAULT_TRANSITION_IN__: false;
    __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__: true;
};
export declare const data: {
    transitions: TransitionVariants;
};
export declare const hooks: {
    useTransitionResponsiveValues: <Element_1 extends import("react").ElementType = "div">(props: {
        in: TransitionProps<Element_1>["in"];
        transition: TransitionProps<Element_1>["transition"];
        duration: TransitionProps<Element_1>["duration"];
        config: TransitionProps<Element_1>["config"];
        delay: TransitionProps<Element_1>["delay"];
        easing: TransitionProps<Element_1>["easing"];
        unmountOnExit: TransitionProps<Element_1>["unmountOnExit"];
    }) => {
        config: import("../..").Undefinable<import("../..").AnimationConfig>;
        delay: import("../..").Undefinable<TransitionDelay>;
        duration: TransitionDuration;
        easing: import("../..").ThemeEase;
        in: boolean;
        transition: TransitionKey | TransitionVariant;
        unmountOnExit: boolean;
    };
};
export declare const keys: {
    __KEYS_TRANSITION_CLASS__: "ds-cl-transition";
};
export { AnimatePresence, Transition };
export type { AnimatePresenceProps, TransitionDelay, TransitionDuration, TransitionKey, TransitionOtherProps, TransitionProps, TransitionRef, TransitionVariant, TransitionVariantKey, TransitionVariants };
//# sourceMappingURL=index.d.ts.map