import type { ElementType } from 'react';

import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation';

export type PopProps<Element extends ElementType> = CommonAnimationProps<Element> & {
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

export type PopRef<Element extends ElementType> = CommonAnimationRef<Element>;
