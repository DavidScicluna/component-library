import type {
	PolymorphicDefaultProps,
	PolymorphicElementType,
	PolymorphicProps,
	PolymorphicRef,
	ResponsiveValue,
	Style,
	ThemeSpacing
} from '@common/types';

export type DefaultHasOtherProps = false;

export type BoxWidth = Style['width'];
export type BoxMinWidth = Style['minWidth'];
export type BoxMaxWidth = Style['maxWidth'];
export type BoxHeight = Style['height'];
export type BoxMinHeight = Style['minHeight'];
export type BoxMaxHeight = Style['maxHeight'];

export type BoxOtherProps<HasOtherProps extends boolean = DefaultHasOtherProps> = HasOtherProps extends true
	? {
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
		}
	: object;

export type BoxProps<
	Element extends PolymorphicElementType,
	Props = PolymorphicDefaultProps,
	HasOtherProps extends boolean = DefaultHasOtherProps
> = PolymorphicProps<Element, Props> & BoxOtherProps<HasOtherProps>;

export type BoxRef<Element extends PolymorphicElementType> = PolymorphicRef<Element>;
