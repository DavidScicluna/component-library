import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

type ProgressSectionOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Value of the section
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
};

export type ProgressSectionProps<Element extends ElementType> = Omit<
	BoxProps<Element, ProgressSectionOtherProps>,
	keyof BoxOtherProps
>;

export type ProgressSectionRef<Element extends ElementType> = BoxRef<Element>;
