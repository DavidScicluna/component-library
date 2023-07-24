import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, HTMLAttributes } from 'react';

import { SerializedStyles } from '@emotion/react';

import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';

export type PolymorphicRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> =
	ComponentPropsWithRef<Element>['ref'];

type PolymorphicProps<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = HTMLAttributes<
	PolymorphicRef<Element>
> & {
	as?: Element;
	sx?: SerializedStyles;
} & ComponentPropsWithoutRef<Element>;

export type PolymorphicComponentProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = Props & PolymorphicProps<Element>;
