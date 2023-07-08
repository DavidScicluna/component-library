import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, HTMLAttributes } from 'react';

// TODO: Maybe move to default/constants
export const __DEFAULT_POLYMORPHIC_ELEMENT__: ElementType = 'div';
export const __DEFAULT_POLYMORPHIC_OBJECT__ = {};

export type PolymorphicRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> =
	ComponentPropsWithRef<Element>['ref'];

type PolymorphicProps<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = HTMLAttributes<
	PolymorphicRef<Element>
> & {
	as?: Element;
} & ComponentPropsWithoutRef<Element>;

export type PolymorphicComponentProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = Props & PolymorphicProps<Element>;
