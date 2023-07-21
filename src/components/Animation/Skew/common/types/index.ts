import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type SkewDirection = 'up' | 'down';

export type SkewProps = CommonAnimationProps & {
	direction?: SkewDirection;
};

export type SkewRef = CommonAnimationRef;
