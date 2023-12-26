import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeFontSize, ThemeRadius } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ThreeDotsSpinnerSize = ThemeFontSize | number | string;

type ThreeDotsSpinnerOtherProps = {
	color?: string;
	isVisible?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<ThreeDotsSpinnerSize>;
};

export type ThreeDotsSpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ThreeDotsSpinnerOtherProps>,
	'children' | keyof BoxOtherProps
>;

export type ThreeDotsSpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;