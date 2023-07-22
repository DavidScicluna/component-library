import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type PopProps = CommonAnimationProps & {
	/**
	 * The initial scale of the element
	 * @default 0.95
	 */
	initialScale?: number;
	/**
	 * If `true`, the element will transition back to exit state
	 * @default true
	 */
	isReversed?: boolean;
};

export type PopRef = CommonAnimationRef;
