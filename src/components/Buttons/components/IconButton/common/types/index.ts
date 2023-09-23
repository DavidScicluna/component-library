import type { ElementType, ReactNode } from 'react';

import type { PickFrom, PolymorphicMouseEvent, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay/components/PushableOverlay';

export type IconButtonMouseEvent<Element extends IconButtonElement = IconButtonDefaultElement> =
	PolymorphicMouseEvent<Element>;

export type IconButtonDefaultElement = 'button';
export type IconButtonElement = PickFrom<ElementType, 'button'>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon' | 'unstyled';

export type IconButtonRenderProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonOtherProps<Element>,
	'color' | 'colorMode'
>;

type IconButtonOtherProps<Element extends IconButtonElement = IconButtonDefaultElement> = ThemeAppAppearanceProps & {
	renderSpinner?: (props: IconButtonRenderProps<Element>) => ReactNode;
	/**
	 * If true, the button will allow on pressing the enter key the button will be clicked
	 *
	 * @default true
	 */
	// canClickOnEnter?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will allow on pressing the space key the button will be clicked
	 *
	 * @default true
	 */
	// canClickOnSpace?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the button can be focused
	 *
	 * @default true
	 */
	// isFocusable?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will show a spinner
	 *
	 * @default false
	 */
	isLoading?: ResponsiveValue<boolean>;
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
	size?: ResponsiveValue<IconButtonSize>;
	/**
	 * The variant of the button
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<IconButtonVariant>;
} & Pick<PushableOverlayProps<Element>, 'isActive' | 'isDisabled' | 'isOutlined'>;

export type IconButtonProps<Element extends IconButtonElement = IconButtonDefaultElement> = Omit<
	BoxProps<Element, IconButtonOtherProps>,
	keyof BoxOtherProps
>;

export type IconButtonRef<Element extends IconButtonElement = IconButtonDefaultElement> = BoxRef<Element>;

export type IconButtonContext<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
