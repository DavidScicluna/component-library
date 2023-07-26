import type { PickFrom } from '@common/types';

import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation';

export type CollapseAxis = 'x' | 'y';

export type CollapseXAxisProps = {
	/**
	 * On which direction should the animation animate either on the x axis or y axis
	 * @default "y"
	 */
	axis: PickFrom<CollapseAxis, 'x'>;
	/**
	 * The width you want the content in its collapsed state.
	 * @default 0
	 */
	startingWidth?: number | string;
	/**
	 * The width you want the content in its expanded state.
	 * @default "auto"
	 */
	endingWidth?: number | string;
};
export type CollapseYAxisProps = {
	/**
	 * On which direction should the animation animate either on the x axis or y axis
	 * @default "y"
	 */
	axis: PickFrom<CollapseAxis, 'y'>;
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

// TODO: Go over all props and set a comment
export type CollapseProps = CommonAnimationProps & {
	/**
	 * If `true`, the opacity of the content will be animated
	 * @default true
	 */
	isOpacityAnimated?: boolean;
} & (CollapseXAxisProps | CollapseYAxisProps);

export type CollapseRef = CommonAnimationRef;
