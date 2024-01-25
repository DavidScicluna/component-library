import type { PolymorphicElementType } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | 'isLoaded';

export type DummyTabSkeletonProps<Element extends PolymorphicElementType> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyTabSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
