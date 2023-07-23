import { ElementType } from 'react';

import { ResponsiveValue } from '@common/types';

import { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

export type AspectRatioRatio = 'auto' | 'square' | 'video' | 'widescreen' | 'portrait' | 'standard' | 'vertical';
export type AspectRatioRatios = AspectRatioRatio[];

type AspectRatioOtherProps = { ratio?: ResponsiveValue<AspectRatioRatio> };

export type AspectRatioProps<Element extends ElementType> = BoxProps<Element, AspectRatioOtherProps>;

export type AspectRatioRef<Element extends ElementType> = BoxRef<Element>;
