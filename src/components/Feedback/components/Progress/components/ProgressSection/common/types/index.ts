import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type ProgressSectionOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Value of the section
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
};

export type ProgressSectionProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, ProgressSectionOtherProps>,
	keyof BoxOtherProps
>;

export type ProgressSectionRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
