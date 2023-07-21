import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type RotateDirection = 'left' | 'right';

export type RotateProps = CommonAnimationProps & {
	direction?: RotateDirection;
};

export type RotateRef = CommonAnimationRef;
