import type { ElementType } from 'react';

import type { PickFrom, ResponsiveValue, ThemeAppearanceProps, ThemeBorderWidth, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DividerDefaultElement = 'div';
export type DividerElement = PickFrom<ElementType, 'div'>;

export type DividerThemeAppearanceProps = Partial<
	Pick<ThemeAppearanceProps, 'colorMode'> & { color: ThemeAppearanceProps['color'] | string }
>;

export type DividerPlacement = 'left' | 'center' | 'right';

export type DividerOrientation = 'vertical' | 'horizontal';
export type DividerOrientations = Array<DividerOrientation>;

export type DividerVariant = 'dotted' | 'dashed' | 'solid';

type DividerOtherProps = DividerThemeAppearanceProps & {
	orientation?: ResponsiveValue<DividerOrientation>;
	placement?: ResponsiveValue<DividerPlacement>;
	size?: ResponsiveValue<ThemeBorderWidth>;
	spacing?: ResponsiveValue<ThemeSpacing>;
	variant?: ResponsiveValue<DividerVariant>;
};

export type DividerProps<Element extends DividerElement> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	DividerOtherProps;

export type DividerRef<Element extends DividerElement> = BoxRef<Element>;
