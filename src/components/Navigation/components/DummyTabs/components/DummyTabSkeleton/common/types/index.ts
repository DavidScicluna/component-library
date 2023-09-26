import type { ElementType } from 'react';

import type { BoxOtherProps } from '@components/Box';
import type { SkeletonProps, SkeletonRef } from '@components/Feedback';

type OmittedSkeletonProps = keyof BoxOtherProps | 'isLoaded';

export type DummyTabSkeletonProps<Element extends ElementType> = Omit<SkeletonProps<Element>, OmittedSkeletonProps>;

export type DummyTabSkeletonRef<Element extends ElementType> = SkeletonRef<Element>;
