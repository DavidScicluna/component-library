import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAspectRatio } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type AspectRatioOtherProps = {
	ratio?: ResponsiveValue<ThemeAspectRatio>;
};

export type AspectRatioProps<Element extends ElementType> = BoxProps<Element, AspectRatioOtherProps>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
