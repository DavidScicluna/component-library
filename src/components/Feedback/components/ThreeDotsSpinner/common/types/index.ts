import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeFontSize,
	ThemeRadius
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ThreeDotsSpinnerSize = ThemeFontSize | number | string;

type ThreeDotsSpinnerOtherProps = {
	color?: string;
	isVisible?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<ThreeDotsSpinnerSize>;
};

export type ThreeDotsSpinnerProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ThreeDotsSpinnerOtherProps>,
	'children' | keyof BoxOtherProps
>;

export type ThreeDotsSpinnerRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
