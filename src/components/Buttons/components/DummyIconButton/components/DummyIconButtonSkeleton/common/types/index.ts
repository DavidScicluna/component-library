import type { PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof ThemeAppAppearanceProps | 'isLoaded' | 'radius';

export type DummyIconButtonSkeletonProps<Element extends PolymorphicElementType> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyIconButtonSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
