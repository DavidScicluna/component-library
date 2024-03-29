import type {
	IconKey,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeFontSize,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type IconDefaultElement = 'span';
export type IconElement = Extract<PolymorphicElementType, 'span'>;

export type IconCategory = 'filled' | 'outlined' | 'twoTone';

export type IconSize = ThemeFontSize | number | string;
export type IconSizes = Array<IconSize>;

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent' | 'unstyled';

type IconOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The icon key from the list of google material icons
	 */
	icon?: ResponsiveValue<IconKey>;
	/**
	 * The type of icon set to choose from either 'filled', 'outlined' or 'twoTone'
	 * @default 'filled'
	 */
	category?: ResponsiveValue<IconCategory>;
	/**
	 * The border radius of the icon container
	 * @default 'full'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * The font size of the icon
	 * @default '2xl'
	 */
	size?: ResponsiveValue<IconSize>;
	/**
	 * The type of styling variant to be set either 'contained', 'light', 'outlined', 'monochrome', 'transparent' or 'unstyled'
	 * @default 'unstyled'
	 */
	variant?: ResponsiveValue<IconVariant>;
};

export type IconProps<Element extends IconElement> = BoxProps<Element, IconOtherProps>;

export type IconRef<Element extends IconElement> = BoxRef<Element>;
