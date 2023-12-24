import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeFontSize, ThemeRadius } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type TailSpinSpinnerSize = ThemeFontSize | number | string;

type TailSpinSpinnerOtherProps = {
	color?: string;
	isVisible?: ResponsiveValue<boolean>;
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<TailSpinSpinnerSize>;
};

export type TailSpinSpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, TailSpinSpinnerOtherProps>,
	'children' | keyof BoxOtherProps
>;

export type TailSpinSpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
