import type { ElementType } from 'react';

import type { AnimationCommonProps, AnimationCommonRef } from '@components/Animation';

export type PopProps<Element extends ElementType> = AnimationCommonProps<Element> & {
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

export type PopRef<Element extends ElementType> = AnimationCommonRef<Element>;
