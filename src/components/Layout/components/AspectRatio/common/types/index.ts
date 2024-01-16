import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAspectRatio
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type AspectRatioOtherProps = {
	ratio?: ResponsiveValue<ThemeAspectRatio>;
};

export type AspectRatioProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	AspectRatioOtherProps
>;

export type AspectRatioRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
