import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | 'isLoaded';

export type DummyTabSkeletonProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	SkeletonProps<Element>,
	OmittedSkeletonProps
>;

export type DummyTabSkeletonRef<Element extends ElementType = PolymorphicDefaultElement> = SkeletonRef<Element>;
