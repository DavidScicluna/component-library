import type {
	PolymorphicDefaultProps,
	PolymorphicElementType,
	PolymorphicProps,
	PolymorphicRef,
	ResponsiveValueProps,
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
	w?: BoxWidth;
	minW?: BoxMinWidth;
	maxW?: BoxMaxWidth;
};

export type BoxHeightProps = {
	h?: BoxHeight;
	minH?: BoxMinHeight;
	maxH?: BoxMaxHeight;
};

export type BoxPaddingProps = Partial<Record<'p' | 'px' | 'py' | 'pl' | 'pt' | 'pr' | 'pb', ThemeSpacing>>;

export type BoxMarginProps = Partial<Record<'m' | 'mx' | 'my' | 'ml' | 'mt' | 'mr' | 'mb', ThemeSpacing>>;

export type BoxOtherProps = BoxWidthProps & BoxHeightProps & BoxPaddingProps & BoxMarginProps;

export type BoxNonResponsiveValueProps = BoxOtherProps;
export type BoxResponsiveValueProps = ResponsiveValueProps<BoxNonResponsiveValueProps>;

export type BoxUniqueProps = BoxResponsiveValueProps;

export type BoxProps<Element extends PolymorphicElementType, Props = PolymorphicDefaultProps> = PolymorphicProps<
	Element,
	Props & BoxUniqueProps
>;

export type BoxRef<Element extends PolymorphicElementType> = PolymorphicRef<Element>;
