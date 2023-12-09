import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyPushableOverlayProps } from '@components/Overlay';

export type DummyIconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyIconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon' | 'unstyled';

type DummyIconButtonOtherProps<Element extends ElementType = PolymorphicDefaultElement> = ThemeAppAppearanceProps & {
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
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
	size?: ResponsiveValue<DummyIconButtonSize>;
	/**
	 * The variant of the button
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<DummyIconButtonVariant>;
} & Pick<DummyPushableOverlayProps<Element>, 'isAnimated' | 'isOutlined'>;

export type DummyIconButtonProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, DummyIconButtonOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyIconButtonRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;

export type DummyIconButtonContext = Pick<DummyIconButtonProps, 'color' | 'colorMode' | 'size' | 'variant'>;
