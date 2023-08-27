import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type { AspectRatio } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type AspectRatioOtherProps = {
	ratio?: ResponsiveValue<AspectRatio>;
};

export type AspectRatioProps<Element extends ElementType> = BoxProps<Element, AspectRatioOtherProps>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
