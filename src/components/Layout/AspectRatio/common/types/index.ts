import { ElementType } from 'react';

import type { ResponsiveValue } from '../../../../../common/types';
import type { BoxProps, BoxRef } from '../../../Box/common/types';

export type AspectRatioRatio = 'auto' | 'square' | 'video' | 'widescreen' | 'portrait' | 'standard' | 'vertical';

export type AspectRatioProps<Element extends ElementType> = BoxProps<
	Element,
	{ ratio?: ResponsiveValue<AspectRatioRatio> }
>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
