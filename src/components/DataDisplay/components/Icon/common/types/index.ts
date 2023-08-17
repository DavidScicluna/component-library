import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';
import type { IconType } from '@common/types/icons';
import type { CommonAppThemeProps, FontSize, Radius } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type IconDefaultElement = 'span';
export type IconElement = PickFrom<ElementType, 'span'>;

export type IconCategory = 'filled' | 'outlined' | 'twoTone';

export type IconRadius = Radius;

export type IconSize = FontSize;

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent' | 'unstyled';

interface IconOtherProps extends CommonAppThemeProps {
	/**
	 * The icon key from the list of google material icons
	 */
	icon?: IconType;
	/**
	 * The type of icon set to choose from either 'filled', 'outlined' or 'twoTone'
	 * @default 'filled'
	 */
	category?: IconCategory;
	/**
	 * The border radius of the icon container
	 * @default 'full'
	 */
	radius?: IconRadius;
	/**
	 * The font size of the icon
	 * @default '2xl'
	 */
	size?: IconSize;
	/**
	 * The type of styling variant to be set either 'contained', 'light', 'outlined', 'monochrome', 'transparent' or 'unstyled'
	 * @default 'unstyled'
	 */
	variant?: IconVariant;
}

export type IconProps<Element extends IconElement = IconDefaultElement> = BoxProps<Element, IconOtherProps>;

export type IconRef<Element extends IconElement = IconDefaultElement> = BoxRef<Element>;
