import type { ElementType } from 'react';

import type { ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | keyof ThemeAppAppearanceProps | 'isLoaded';

export type DummyBadgeSkeletonProps<Element extends ElementType> = Omit<SkeletonProps<Element>, OmittedSkeletonProps>;

export type DummyBadgeSkeletonRef<Element extends ElementType> = SkeletonRef<Element>;
