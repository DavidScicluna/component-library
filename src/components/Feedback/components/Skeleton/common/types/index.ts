import type { ElementType } from 'react';

import type { CommonAppThemeProps, Radius } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

interface SkeletonOtherProps extends CommonAppThemeProps {
	isAnimated?: boolean;
	isLoaded?: boolean;
	radius?: Radius;
}

export type SkeletonProps<Element extends ElementType> = BoxProps<Element, SkeletonOtherProps>;

export type SkeletonRef<Element extends ElementType> = BoxRef<Element>;
