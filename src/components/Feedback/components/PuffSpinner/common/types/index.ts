import type { PolymorphicElementType, ResponsiveValue, ThemeFontSize, ThemeRadius } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type PuffSpinnerSize = ThemeFontSize | number | string;

type PuffSpinnerOtherProps = {
	color?: string;
	isVisible?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<PuffSpinnerSize>;
};

export type PuffSpinnerProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, PuffSpinnerOtherProps>,
	'children' | keyof BoxOtherProps
>;

export type PuffSpinnerRef<Element extends PolymorphicElementType> = BoxRef<Element>;
