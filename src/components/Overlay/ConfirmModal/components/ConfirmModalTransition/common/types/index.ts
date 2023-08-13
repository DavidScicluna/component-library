import type { MotionBoxProps, MotionBoxRef } from '@components/Animation';

export type ConfirmModalTransitionVariant = 'fade' | 'pop';

export type ConfirmModalTransitionProps = MotionBoxProps & {
	/**
	 * If `true`, the animation will animate in, if `false` the animation will animate out
	 * @default false
	 */
	in?: boolean;
	/**
	 * The type of animation that will be triggered
	 * @default 'pop'
	 */
	variant?: ConfirmModalTransitionVariant;
};

export type ConfirmModalTransitionRef = MotionBoxRef;
