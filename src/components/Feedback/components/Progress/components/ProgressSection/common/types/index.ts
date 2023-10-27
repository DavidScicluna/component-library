import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

type ProgressSectionOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Value of the section
	 *
	 * @default 0
	 */
	value?: ResponsiveValue<number>;
};

export type ProgressSectionProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	ProgressSectionOtherProps;

export type ProgressSectionRef<Element extends ElementType> = BoxRef<Element>;
