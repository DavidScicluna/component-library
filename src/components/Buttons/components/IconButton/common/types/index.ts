import type { ReactNode } from 'react';

import type {
	PolymorphicElementType,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay';

export type IconButtonDefaultElement = 'button';
export type IconButtonElement = Extract<PolymorphicElementType, 'button'>;

export type IconButtonMouseEvent<Element extends IconButtonElement = IconButtonDefaultElement> =
	PolymorphicMouseEvent<Element>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon' | 'unstyled';

export type IconButtonRenderProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonOtherProps<Element>,
	'color' | 'colorMode'
>;

type IconButtonOtherProps<Element extends IconButtonElement = IconButtonDefaultElement> = ThemeAppAppearanceProps & {
	renderSpinner?: (props: IconButtonRenderProps<Element>) => ReactNode;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
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
} & Pick<PushableOverlayProps<Element>, 'isActive' | 'isDisabled' | 'isFocused' | 'isOutlined'>;

export type IconButtonProps<Element extends IconButtonElement = IconButtonDefaultElement> = Omit<
	BoxProps<Element, IconButtonOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type IconButtonRef<Element extends IconButtonElement = IconButtonDefaultElement> = BoxRef<Element>;

export type IconButtonContext = Pick<IconButtonProps, 'color' | 'colorMode' | 'size' | 'variant'>;
