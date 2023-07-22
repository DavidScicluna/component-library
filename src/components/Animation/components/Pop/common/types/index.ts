import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type PopProps = CommonAnimationProps & {
	/**
	 * The initial scale of the element
	 * @default 0.95
	 */
	initialScale?: number;
	/**
	 * If `true`, the element will be transitioned back to the offset when it leaves.
	 * Otherwise, it'll only fade out
	 * @default true
	 */
	isReversed?: boolean;
};

export type PopRef = CommonAnimationRef;
