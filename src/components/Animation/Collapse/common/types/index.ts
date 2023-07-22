import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

// TODO: Go over all props and set a comment
export type CollapseProps = CommonAnimationProps & {
	/**
	 * If `true`, the opacity of the content will be animated
	 * @default true
	 */
	isOpacityAnimated?: boolean;
	/**
	 * The height you want the content in its collapsed state.
	 * @default 0
	 */
	startingHeight?: number | string;
	/**
	 * The height you want the content in its expanded state.
	 * @default "auto"
	 */
	endingHeight?: number | string;
};

export type CollapseRef = CommonAnimationRef;
