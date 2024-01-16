import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type SpaceOtherProps = {
	width?: ThemeSpacing;
	height?: ThemeSpacing;
};
export type SpaceResponsiveValueProps = ResponsiveValueProps<SpaceOtherProps, 'width' | 'height'>;

export type SpaceProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	SpaceResponsiveValueProps
>;

export type SpaceRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
