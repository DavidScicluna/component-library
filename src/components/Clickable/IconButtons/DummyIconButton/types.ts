import { SkeletonProps } from '../../../Skeleton/types';
import { CommonIconButtonProps } from '../common/types';

type Omitted = 'color' | 'colorScheme' | 'isReversed' | 'variant';

export type DummyIconButtonProps = Omit<SkeletonProps, Omitted> & {
	isRound?: boolean;
} & CommonIconButtonProps;
