import type { PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof ThemeAppAppearanceProps | 'isLoaded';

export type DummyButtonSkeletonProps<Element extends PolymorphicElementType> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyButtonSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
