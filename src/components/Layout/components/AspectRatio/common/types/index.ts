import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAspectRatio } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type AspectRatioOtherProps = {
	ratio?: ResponsiveValue<ThemeAspectRatio>;
};

export type AspectRatioProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> &
	AspectRatioOtherProps;

export type AspectRatioRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
