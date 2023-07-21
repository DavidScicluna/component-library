import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type ScaleAxis = 'x' | 'y';

export type ScaleProps = CommonAnimationProps & {
	axis?: ScaleAxis;
};

export type ScaleRef = CommonAnimationRef;
