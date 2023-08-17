import type { ElementType } from 'react';

import type { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';
import type { Nullable, ResponsiveValue, Style } from '@common/types';
import type { PolymorphicComponentProps, PolymorphicRef } from '@common/types/polymorphic';
import type { Space } from '@common/types/theme';

export type BoxWidth = Style['width'];
export type BoxMinWidth = Style['minWidth'];
export type BoxMaxWidth = Style['maxWidth'];
export type BoxHeight = Style['height'];
export type BoxMinHeight = Style['minHeight'];
export type BoxMaxHeight = Style['maxHeight'];

export interface BoxOtherProps {
	w?: ResponsiveValue<BoxWidth>;
	minW?: ResponsiveValue<BoxMinWidth>;
	maxW?: ResponsiveValue<BoxMaxWidth>;
	h?: ResponsiveValue<BoxHeight>;
	minH?: ResponsiveValue<BoxMinHeight>;
	maxH?: ResponsiveValue<BoxMaxHeight>;
	p?: ResponsiveValue<Space>;
	px?: ResponsiveValue<Space>;
	py?: ResponsiveValue<Space>;
	pl?: ResponsiveValue<Space>;
	pt?: ResponsiveValue<Space>;
	pr?: ResponsiveValue<Space>;
	pb?: ResponsiveValue<Space>;
	m?: ResponsiveValue<Space>;
	mx?: ResponsiveValue<Space>;
	my?: ResponsiveValue<Space>;
	ml?: ResponsiveValue<Space>;
	mt?: ResponsiveValue<Space>;
	mr?: ResponsiveValue<Space>;
	mb?: ResponsiveValue<Space>;
}

export type BoxProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = PolymorphicComponentProps<Element, Props & BoxOtherProps>;

export type BoxRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = Nullable<
	PolymorphicRef<Element>
>;
