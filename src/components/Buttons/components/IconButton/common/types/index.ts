import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayNonResponsiveValueProps } from '@components/Overlay';

export type IconButtonDefaultElement = 'button';
export type IconButtonElement = Extract<PolymorphicElementType, 'button'>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon' | 'unstyled';

export type IconButtonRenderProps = ThemeAppAppearanceProps;

export type IconButtonNonResponsiveValueProps = {
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
	/**
	 * If true, the button will show a spinner
	 *
	 * @default false
	 */
	isLoading?: boolean;
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
	size?: IconButtonSize;
	/**
	 * The variant of the button
	 *
	 * @default 'contained'
	 */
	variant?: IconButtonVariant;
} & Pick<PushableOverlayNonResponsiveValueProps, 'isActive' | 'isDisabled' | 'isFocused' | 'isOutlined'>;
export type IconButtonResponsiveValueProps = ResponsiveValueProps<IconButtonNonResponsiveValueProps>;

export type IconButtonUniqueProps = ThemeAppAppearanceProps & {
	renderSpinner?: (props: IconButtonRenderProps) => ReactNode;
} & IconButtonResponsiveValueProps;

export type IconButtonProps<Element extends IconButtonElement> = BoxProps<Element, IconButtonUniqueProps>;

export type IconButtonRef<Element extends IconButtonElement> = BoxRef<Element>;

type PickedIconButtonProps = 'color' | 'colorMode' | 'size' | 'variant';
export type IconButtonContext<Element extends IconButtonElement> = Pick<
	IconButtonProps<Element>,
	PickedIconButtonProps
>;
