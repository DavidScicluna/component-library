import type { PolymorphicElementType } from '@common/types';

import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

export type DummyTabSkeletonProps<Element extends PolymorphicElementType> = Omit<SkeletonProps<Element>, 'isLoaded'>;

export type DummyTabSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
