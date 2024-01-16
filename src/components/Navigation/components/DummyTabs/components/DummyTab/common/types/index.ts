import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeSpacing
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type DummyTabRenderProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	DummyTabOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type DummyTabOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	ThemeAppAppearanceProps & {
		renderTop?: (props: DummyTabRenderProps<Element>) => ReactNode;
		renderBottom?: (props: DummyTabRenderProps<Element>) => ReactNode;
		renderLeft?: (props: DummyTabRenderProps<Element>) => ReactNode;
		renderRight?: (props: DummyTabRenderProps<Element>) => ReactNode;
		/**
		 * The index of the tab
		 */
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

export type DummyTabProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, DummyTabOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type DummyTabRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
