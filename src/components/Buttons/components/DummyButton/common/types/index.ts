import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { DummyPushableOverlayProps } from '@components/Overlay';

export type DummyButtonDefaultElement = PolymorphicDefaultElement;
export type DummyButtonElement = Extract<PolymorphicElementType, 'div'>;

export type DummyButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text' | 'unstyled';

export type DummyButtonRenderProps<Element extends DummyButtonElement> = Pick<
	DummyButtonOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyButtonOtherProps<Element extends DummyButtonElement> = ThemeAppAppearanceProps & {
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

export type DummyButtonProps<Element extends DummyButtonElement> = BoxProps<Element, DummyButtonOtherProps<Element>>;

export type DummyButtonRef<Element extends DummyButtonElement> = BoxRef<Element>;

export type DummyButtonContext<Element extends DummyButtonElement> = Pick<
	DummyButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
