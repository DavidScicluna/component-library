import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DummyIconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyIconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon';

type DummyIconButtonOtherProps = ThemeAppAppearanceProps & {
	/**
	 *  If `true` the button will not have the pulse animation
	 *
	 * @default true
	 */
	isAnimated?: boolean;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
	/**
	 * If true, the button's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: boolean;
	/**
	 * The size of the button
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<DummyIconButtonSize>;
	/**
	 * The variant of the button
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<DummyIconButtonVariant>;
};

export type DummyIconButtonProps<Element extends ElementType> = Omit<
	BoxProps<Element, DummyIconButtonOtherProps>,
	keyof BoxOtherProps
>;

export type DummyIconButtonRef<Element extends ElementType> = BoxRef<Element>;

export type DummyIconButtonContext<Element extends ElementType> = Pick<
	DummyIconButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
