import { ElementType } from 'react';

import type { ResponsiveValue } from '../../../../../common/types';
import type { BoxProps, BoxRef } from '../../../Box/common/types';

export type AspectRatioRatio = 'auto' | 'square' | 'video' | 'widescreen' | 'portrait' | 'standard' | 'vertical';
export type AspectRatioRatios = AspectRatioRatio[];

type AspectRatioOtherProps = { ratio?: ResponsiveValue<AspectRatioRatio> };

export type AspectRatioProps<Element extends ElementType> = BoxProps<Element, AspectRatioOtherProps>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
