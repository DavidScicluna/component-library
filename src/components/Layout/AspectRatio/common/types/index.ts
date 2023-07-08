import { ElementType } from 'react';

import { ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type AspectRatioRatio = 'auto' | 'square' | 'video' | [number, number];

export type AspectRatioProps<Element extends ElementType> = BoxProps<
	Element,
	{ ratio?: ResponsiveValue<AspectRatioRatio> }
>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
