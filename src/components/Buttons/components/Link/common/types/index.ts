import type {
	PolymorphicElementType,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type LinkDefaultElement = 'a';
export type LinkElement = Extract<PolymorphicElementType, 'a'>;

export type LinkMouseEvent<Element extends LinkElement = LinkDefaultElement> = PolymorphicMouseEvent<Element>;

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

export type LinkProps<Element extends LinkElement = LinkDefaultElement> = BoxProps<Element, LinkOtherProps>;

export type LinkRef<Element extends LinkElement = LinkDefaultElement> = BoxRef<Element>;
