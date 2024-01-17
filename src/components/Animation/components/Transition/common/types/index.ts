import type {
	AnimationConfig,
	PolymorphicElementType,
	ResponsiveValue,
	Style,
	ThemeDelay,
	ThemeDuration,
	ThemeEase
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type TransitionDelay = ThemeDelay | number;
export type TransitionDuration = ThemeDuration | number;

export type TransitionKey =
	| 'fade'
	| 'collapse'
	| 'skew-up'
	| 'skew-down'
	| 'rotate-right'
	| 'rotate-left'
	| 'slide-down'
	| 'slide-up'
	| 'slide-right'
	| 'slide-left'
	| 'scale-y'
	| 'scale-x'
	| 'scale'
	| 'pop'
	| 'pop-top-left'
	| 'pop-top-right'
	| 'pop-bottom-left'
	| 'pop-bottom-right';

export type TransitionVariantKey = 'enter' | 'exit';
export type TransitionVariant = Record<TransitionVariantKey, Style>;
export type TransitionVariants = Record<TransitionKey, TransitionVariant>;

export type TransitionOtherProps = {
	config?: ResponsiveValue<AnimationConfig>;
	/**
	 * Transition delay from theme or in ms
	 */
	delay?: ResponsiveValue<TransitionDelay>;
	/**
	 * Transition duration from theme or in ms
	 *
	 * @default 'normal'
	 */
	duration?: ResponsiveValue<TransitionDuration>;
	/**
	 * Transition easing from theme
	 *
	 * @default 'ease-in-out'
	 */
	easing?: ResponsiveValue<ThemeEase>;
	/**
	 * If `true`, the animation will animate in, if `false` the animation will animate out
	 *
	 * @default false
	 */
	in?: ResponsiveValue<boolean>;
	/**
	 * Transition name or object
	 *
	 * @default 'fade'
	 */
	transition?: ResponsiveValue<TransitionKey | TransitionVariant>;
	/**
	 * If `true`, the element will unmount when `in={false}` and animation is done
	 *
	 * @default true
	 */
	unmountOnExit?: ResponsiveValue<boolean>;
	/**
	 * Callback fired when all exiting nodes have completed animating out
	 */
	onExitComplete?: () => void;
	/**
	 * Called when exit transition ends
	 */
	// onExited?: () => void;
	/**
	 * Called when exit transition starts
	 */
	// onExit?: () => void;
	/**
	 * Called when enter transition starts
	 */
	// onEnter?: () => void;
	/**
	 * Called when enter transition ends
	 */
	// onEntered?: () => void;
};

export type TransitionProps<Element extends PolymorphicElementType> = BoxProps<Element, TransitionOtherProps>;

export type TransitionRef<Element extends PolymorphicElementType> = BoxRef<Element>;
