import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'isLoaded';

export type DummyButtonSkeletonProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyButtonSkeletonRef<Element extends ElementType = PolymorphicDefaultElement> = SkeletonRef<Element>;
