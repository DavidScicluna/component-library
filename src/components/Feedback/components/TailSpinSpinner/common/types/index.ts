import type { PolymorphicElementType, ResponsiveValue, ThemeFontSize, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type TailSpinSpinnerSize = ThemeFontSize | number | string;

type TailSpinSpinnerOtherProps = {
	color?: string;
	isVisible?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<TailSpinSpinnerSize>;
};

export type TailSpinSpinnerProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, TailSpinSpinnerOtherProps>,
	'children'
>;

export type TailSpinSpinnerRef<Element extends PolymorphicElementType> = BoxRef<Element>;
