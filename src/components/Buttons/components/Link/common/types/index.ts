import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type LinkDefaultElement = 'a';
export type LinkElement = Extract<PolymorphicElementType, 'a'>;

type LinkOtherProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the link will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the link will have text decoration styling
	 *
	 * @default true
	 */
	isUnderline?: ResponsiveValue<boolean>;
	/**
	 * If true, the link will be unstyled
	 *
	 * @default false
	 */
	isUnstyled?: ResponsiveValue<boolean>;
};

export type LinkProps<Element extends LinkElement> = BoxProps<Element, LinkOtherProps>;

export type LinkRef<Element extends LinkElement> = BoxRef<Element>;
