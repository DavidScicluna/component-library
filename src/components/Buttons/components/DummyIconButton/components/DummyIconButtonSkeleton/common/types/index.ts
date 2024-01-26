import type { PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'isLoaded' | 'radius';

export type DummyIconButtonSkeletonProps<Element extends PolymorphicElementType> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyIconButtonSkeletonRef<Element extends PolymorphicElementType> = SkeletonRef<Element>;
