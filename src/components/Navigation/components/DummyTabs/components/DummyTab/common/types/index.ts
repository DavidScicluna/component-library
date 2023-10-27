import type { ElementType, ReactNode } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DummyTabRenderProps<Element extends ElementType> = Pick<
	DummyTabOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyTabOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	renderTop?: (props: DummyTabRenderProps<Element>) => ReactNode;
	renderBottom?: (props: DummyTabRenderProps<Element>) => ReactNode;
	renderLeft?: (props: DummyTabRenderProps<Element>) => ReactNode;
	renderRight?: (props: DummyTabRenderProps<Element>) => ReactNode;
	index: number;
	/**
	 * If true, the tab will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the tab text will be in uppercase else it will be capitalized
	 *
	 * @default true
	 */
	isUppercase?: ResponsiveValue<boolean>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type DummyTabProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	DummyTabOtherProps<Element>;

export type DummyTabRef<Element extends ElementType> = BoxRef<Element>;
