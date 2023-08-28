import type { ElementType } from 'react';

import type { IconKey, PickFrom, ThemeAppAppearanceProps, ThemeFontSize, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type IconDefaultElement = 'span';
export type IconElement = PickFrom<ElementType, 'span'>;

export type IconCategory = 'filled' | 'outlined' | 'twoTone';

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent' | 'unstyled';

type IconOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The icon key from the list of google material icons
	 */
	icon?: IconKey;
	/**
	 * The type of icon set to choose from either 'filled', 'outlined' or 'twoTone'
	 * @default 'filled'
	 */
	category?: IconCategory;
	/**
	 * The border radius of the icon container
	 * @default 'full'
	 */
	radius?: ThemeRadius;
	/**
	 * The font size of the icon
	 * @default '2xl'
	 */
	size?: ThemeFontSize;
	/**
	 * The type of styling variant to be set either 'contained', 'light', 'outlined', 'monochrome', 'transparent' or 'unstyled'
	 * @default 'unstyled'
	 */
	variant?: IconVariant;
};

export type IconProps<Element extends IconElement = IconDefaultElement> = BoxProps<Element, IconOtherProps>;

export type IconRef<Element extends IconElement = IconDefaultElement> = BoxRef<Element>;
