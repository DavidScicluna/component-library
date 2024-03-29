import type {
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppearanceProps,
	ThemeBorderWidth,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type DividerDefaultElement = 'hr';
export type DividerElement = Extract<PolymorphicElementType, 'hr'>;

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

export type DividerProps<Element extends DividerElement> = BoxProps<Element, DividerOtherProps>;

export type DividerRef<Element extends DividerElement> = BoxRef<Element>;
