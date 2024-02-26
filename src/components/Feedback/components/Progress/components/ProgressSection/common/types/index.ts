import type { PolymorphicElementType, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type ProgressSectionOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Value of the section
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
};

export type ProgressSectionProps<Element extends PolymorphicElementType> = BoxProps<Element, ProgressSectionOtherProps>;

export type ProgressSectionRef<Element extends PolymorphicElementType> = BoxRef<Element>;
