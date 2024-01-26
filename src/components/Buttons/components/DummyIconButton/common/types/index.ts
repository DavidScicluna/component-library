import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyPushableOverlayProps } from '@components/Overlay';

export type DummyIconButtonDefaultElement = PolymorphicDefaultElement;
export type DummyIconButtonElement = Extract<PolymorphicElementType, 'div'>;

export type DummyIconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DummyIconButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'icon' | 'unstyled';

type DummyIconButtonOtherProps<Element extends DummyIconButtonElement> = ThemeAppAppearanceProps & {
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

export type DummyIconButtonProps<Element extends DummyIconButtonElement> = Omit<
	BoxProps<Element, DummyIconButtonOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyIconButtonRef<Element extends DummyIconButtonElement> = BoxRef<Element>;

export type DummyIconButtonContext<Element extends DummyIconButtonElement> = Pick<
	DummyIconButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
