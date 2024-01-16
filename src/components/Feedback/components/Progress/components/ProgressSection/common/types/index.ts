import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type ProgressSectionOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Value of the section
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
};

export type ProgressSectionProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ProgressSectionOtherProps>,
	keyof BoxOtherProps
>;

export type ProgressSectionRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
