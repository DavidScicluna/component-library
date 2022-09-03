import { SkeletonProps } from '../../../Skeleton/types';
import { CommonButtonProps } from '../common/types';

export type DummyButtonProps = Omit<SkeletonProps, 'color' | 'colorScheme' | 'isReversed' | 'variant'> & {
	hasLeft?: boolean;
	hasRight?: boolean;
} & CommonButtonProps;
