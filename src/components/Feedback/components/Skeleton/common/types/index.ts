import type { ElementType } from 'react';

import type { ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type SkeletonOtherProps = ThemeAppAppearanceProps & {
	isAnimated?: boolean;
	isLoaded?: boolean;
	radius?: ThemeRadius;
};

export type SkeletonProps<Element extends ElementType> = BoxProps<Element, SkeletonOtherProps>;

export type SkeletonRef<Element extends ElementType> = BoxRef<Element>;
