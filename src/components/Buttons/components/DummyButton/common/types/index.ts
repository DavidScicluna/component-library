import type { ElementType, ReactNode } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyPushableOverlayProps } from '@components/Overlay/components/DummyPushableOverlay';

export type DummyButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text' | 'unstyled';

export type DummyButtonRenderProps<Element extends ElementType> = Pick<
	DummyButtonOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyButtonOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	renderLeft?: (props: DummyButtonRenderProps<Element>) => ReactNode;
	renderRight?: (props: DummyButtonRenderProps<Element>) => ReactNode;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: ResponsiveValue<boolean>;
	/**
	 * If true, the button's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: ResponsiveValue<boolean>;
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
} & Pick<DummyPushableOverlayProps<Element>, 'isAnimated' | 'isOutlined'>;

export type DummyButtonProps<Element extends ElementType> = Omit<
	BoxProps<Element, DummyButtonOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyButtonRef<Element extends ElementType> = BoxRef<Element>;

export type DummyButtonContext<Element extends ElementType> = Pick<
	DummyButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
