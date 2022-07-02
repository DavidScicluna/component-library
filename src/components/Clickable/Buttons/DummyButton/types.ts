import { SkeletonProps } from '../../../Skeleton/types';
import { CommonButtonProps } from '../common/types';

type Omitted = 'color' | 'colorScheme' | 'isReversed' | 'variant';

export type DummyButtonProps = Omit<SkeletonProps, Omitted> & {
	hasLeft?: boolean;
	hasRight?: boolean;
} & CommonButtonProps;
