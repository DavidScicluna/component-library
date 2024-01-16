import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAspectRatio
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type AspectRatioOtherProps = {
	ratio?: ThemeAspectRatio;
};
export type AspectRatioResponsiveValueProps = ResponsiveValueProps<AspectRatioOtherProps, 'ratio'>;

export type AspectRatioProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	AspectRatioResponsiveValueProps
>;

export type AspectRatioRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
