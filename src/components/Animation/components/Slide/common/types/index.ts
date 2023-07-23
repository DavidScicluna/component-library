import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation/common/types';

export type SlideProps = CommonAnimationProps & {
	/**
	 * The offset on the horizontal or `x` axis
	 * @default 0
	 */
	offsetX?: string | number;
	/**
	 * The offset on the vertical or `y` axis
	 * @default 8
	 */
	offsetY?: string | number;
	/**
	 * If `true`, the element will be transitioned back to the offset when it leaves.
	 * Otherwise, it'll only fade out
	 * @default true
	 */
	isReversed?: boolean;
};

export type SlideRef = CommonAnimationRef;
