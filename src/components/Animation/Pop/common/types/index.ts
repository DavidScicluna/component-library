import { CommonAnimationProps, CommonAnimationRef } from '../../../common/types';

export type PopXAxis = 'left' | 'right';
export type PopYAxis = 'top' | 'bottom';

export type PopProps = CommonAnimationProps & {
	xAxis?: Partial<PopXAxis>;
	yAxis?: Partial<PopYAxis>;
};

export type PopRef = CommonAnimationRef;
