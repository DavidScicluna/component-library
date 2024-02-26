import type { PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof ThemeAppAppearanceProps | 'isAnimated' | 'isLoaded';

export type DummyBadgeSkeletonProps<Element extends PolymorphicElementType> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyBadgeSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
