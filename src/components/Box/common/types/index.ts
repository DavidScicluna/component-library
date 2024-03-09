import type {
	PolymorphicDefaultProps,
	PolymorphicElementType,
	PolymorphicProps,
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

export type BoxWidthProps = {
	w?: ResponsiveValue<BoxWidth>;
	minW?: ResponsiveValue<BoxMinWidth>;
	maxW?: ResponsiveValue<BoxMaxWidth>;
};

export type BoxHeightProps = {
	h?: ResponsiveValue<BoxHeight>;
	minH?: ResponsiveValue<BoxMinHeight>;
	maxH?: ResponsiveValue<BoxMaxHeight>;
};

export type BoxPaddingProps = {
	p?: ResponsiveValue<ThemeSpacing>;
	px?: ResponsiveValue<ThemeSpacing>;
	py?: ResponsiveValue<ThemeSpacing>;
	pl?: ResponsiveValue<ThemeSpacing>;
	pt?: ResponsiveValue<ThemeSpacing>;
	pr?: ResponsiveValue<ThemeSpacing>;
	pb?: ResponsiveValue<ThemeSpacing>;
};

export type BoxMarginProps = {
	m?: ResponsiveValue<ThemeSpacing>;
	mx?: ResponsiveValue<ThemeSpacing>;
	my?: ResponsiveValue<ThemeSpacing>;
	ml?: ResponsiveValue<ThemeSpacing>;
	mt?: ResponsiveValue<ThemeSpacing>;
	mr?: ResponsiveValue<ThemeSpacing>;
	mb?: ResponsiveValue<ThemeSpacing>;
};

export type BoxOtherProps = BoxWidthProps & BoxHeightProps & BoxPaddingProps & BoxMarginProps;

export type BoxProps<Element extends PolymorphicElementType, Props = PolymorphicDefaultProps> = PolymorphicProps<
	Element,
	Props
>;

export type BoxRef<Element extends PolymorphicElementType> = PolymorphicRef<Element>;
