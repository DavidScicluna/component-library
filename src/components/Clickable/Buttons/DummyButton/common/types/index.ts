import { SkeletonProps } from '../../../../../Feedback/Skeleton/common/types';
import { CommonButtonProps } from '../../../common/types';

type Omitted = 'color' | 'colorScheme' | '_firstLetter' | 'isReversed' | 'variant';

export type DummyButtonProps = Omit<SkeletonProps, Omitted> & CommonButtonProps;
