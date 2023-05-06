import { SkeletonProps } from '../../../../../Skeleton/common/types';
import { CommonIconButtonProps } from '../../../common/types';

type Omitted = 'color' | 'colorScheme' | '_firstLetter' | 'isReversed' | 'variant';

export type DummyIconButtonProps = Omit<SkeletonProps, Omitted> & CommonIconButtonProps;

export type DummyIconButtonContext = Pick<DummyIconButtonProps, 'color' | 'colorMode' | 'size'>;
