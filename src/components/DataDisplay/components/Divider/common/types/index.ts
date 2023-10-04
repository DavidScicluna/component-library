import type { ElementType } from 'react';

import type { PickFrom, ResponsiveValue, ThemeAppearanceProps, ThemeBorderWidth, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

export type DividerDefaultElement = 'div';
export type DividerElement = PickFrom<ElementType, 'div'>;

export type DividerThemeAppAppearanceProps = Partial<ThemeAppearanceProps & { color: string }>;

export type DividerPlacement = 'left' | 'center' | 'right';

export type DividerOrientation = 'vertical' | 'horizontal';
export type DividerOrientations = Array<DividerOrientation>;

export type DividerVariant = 'dotted' | 'dashed' | 'solid';

type DividerOtherProps = DividerThemeAppAppearanceProps & {
	orientation?: ResponsiveValue<DividerOrientation>;
	placement?: ResponsiveValue<DividerPlacement>;
	size?: ResponsiveValue<ThemeBorderWidth>;
	spacing?: ResponsiveValue<ThemeSpacing>;
	variant?: ResponsiveValue<DividerVariant>;
};

export type DividerProps<Element extends DividerElement> = Omit<
	BoxProps<Element, DividerOtherProps>,
	keyof BoxOtherProps
>;

export type DividerRef<Element extends DividerElement> = BoxRef<Element>;
