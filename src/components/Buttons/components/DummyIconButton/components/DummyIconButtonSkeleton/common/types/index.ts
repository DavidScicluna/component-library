import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'isLoaded' | 'radius';

export type DummyIconButtonSkeletonProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyIconButtonSkeletonRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	SkeletonRef<Element>;
