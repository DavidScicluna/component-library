import type { PolymorphicElementType, ResponsiveValueProps, ThemeAspectRatio } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type AspectRatioNonResponsiveValueProps = { ratio?: ThemeAspectRatio };
export type AspectRatioResponsiveValueProps = ResponsiveValueProps<AspectRatioNonResponsiveValueProps>;

export type AspectRatioUniqueProps = AspectRatioResponsiveValueProps;

export type AspectRatioProps<Element extends PolymorphicElementType> = BoxProps<Element, AspectRatioUniqueProps>;

export type AspectRatioRef<Element extends PolymorphicElementType> = BoxRef<Element>;
