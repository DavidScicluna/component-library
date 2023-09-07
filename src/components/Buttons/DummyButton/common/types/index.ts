import type { ElementType, ReactNode } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DummyButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text';

export type DummyButtonRenderProps = Pick<DummyButtonOtherProps, 'color' | 'colorMode'> & { w?: number; h?: number };

type DummyButtonOtherProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: DummyButtonRenderProps) => ReactNode;
	renderRight?: (props: DummyButtonRenderProps) => ReactNode;
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
	 * If true, the button will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: boolean;
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
	size?: ResponsiveValue<DummyButtonSize>;
	/**
	 * The variant of the button
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<DummyButtonVariant>;
};

export type DummyButtonProps<Element extends ElementType> = Omit<
	BoxProps<Element, DummyButtonOtherProps>,
	keyof BoxOtherProps
>;

export type DummyButtonRef<Element extends ElementType> = BoxRef<Element>;

export type DummyButtonContext<Element extends ElementType> = Pick<
	DummyButtonProps<Element>,
	'color' | 'colorMode' | 'isAnimated' | 'size' | 'variant'
>;
