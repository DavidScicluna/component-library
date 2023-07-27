import { ElementType } from 'react';

// import type { ResponsiveValue } from '@common/types';
import type { AppColor, CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type SkeletonVariant = 'rectangle' | 'circle' | 'text';

type SkeletonOtherProps = CommonAppThemeProps & {
	startColor?: AppColor;
	endColor?: AppColor;
	isAnimated?: boolean;
	isLoaded?: boolean;
	variant?: SkeletonVariant;
};

export type SkeletonProps<Element extends ElementType> = BoxProps<Element, SkeletonOtherProps>;

export type SkeletonRef<Element extends ElementType> = BoxRef<Element>;
