import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type SpaceOtherProps = {
	width?: ResponsiveValue<ThemeSpacing>;
	height?: ResponsiveValue<ThemeSpacing>;
};

export type SpaceProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	SpaceOtherProps
>;

export type SpaceRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
