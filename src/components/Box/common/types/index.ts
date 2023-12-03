import type { ElementType } from 'react';

import type {
	PolymorphicComponentProps,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicRef,
	ResponsiveValue,
	Style,
	ThemeSpacing
} from '@common/types';

export type BoxWidth = Style['width'];
export type BoxMinWidth = Style['minWidth'];
export type BoxMaxWidth = Style['maxWidth'];
export type BoxHeight = Style['height'];
export type BoxMinHeight = Style['minHeight'];
export type BoxMaxHeight = Style['maxHeight'];

export type BoxOtherProps = {
	w?: ResponsiveValue<BoxWidth>;
	minW?: ResponsiveValue<BoxMinWidth>;
	maxW?: ResponsiveValue<BoxMaxWidth>;
	h?: ResponsiveValue<BoxHeight>;
	minH?: ResponsiveValue<BoxMinHeight>;
	maxH?: ResponsiveValue<BoxMaxHeight>;
	p?: ResponsiveValue<ThemeSpacing>;
	px?: ResponsiveValue<ThemeSpacing>;
	py?: ResponsiveValue<ThemeSpacing>;
	pl?: ResponsiveValue<ThemeSpacing>;
	pt?: ResponsiveValue<ThemeSpacing>;
	pr?: ResponsiveValue<ThemeSpacing>;
	pb?: ResponsiveValue<ThemeSpacing>;
	m?: ResponsiveValue<ThemeSpacing>;
	mx?: ResponsiveValue<ThemeSpacing>;
	my?: ResponsiveValue<ThemeSpacing>;
	ml?: ResponsiveValue<ThemeSpacing>;
	mt?: ResponsiveValue<ThemeSpacing>;
	mr?: ResponsiveValue<ThemeSpacing>;
	mb?: ResponsiveValue<ThemeSpacing>;
};

export type BoxProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicComponentProps<Element, Props & BoxOtherProps>;

export type BoxRef<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicRef<Element>;
