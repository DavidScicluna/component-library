import type { ChangeEvent, ComponentPropsWithoutRef, ElementType, FocusEvent, FormEvent, MouseEvent, Ref } from 'react';

import type { Style } from '.';

export type PolymorphicElementType = ElementType;

export type PolymorphicElement<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	Element extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Element] : Element;

export type PolymorphicDefaultElement = Extract<PolymorphicElementType, 'div'>;
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export type PolymorphicDefaultProps = {};

export type PolymorphicMouseEvent<Element extends PolymorphicElementType = PolymorphicDefaultElement> = MouseEvent<
	PolymorphicElement<Element>,
	globalThis.MouseEvent
>;

export type PolymorphicChangeEvent<Element extends PolymorphicElementType = PolymorphicDefaultElement> = ChangeEvent<
	PolymorphicElement<Element>
>;

export type PolymorphicFocusEvent<Element extends PolymorphicElementType = PolymorphicDefaultElement> = FocusEvent<
	PolymorphicElement<Element>
>;

export type PolymorphicFormEvent<Element extends PolymorphicElementType = PolymorphicDefaultElement> = FormEvent<
	PolymorphicElement<Element>
>;

type PolymorphicOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
} & ComponentPropsWithoutRef<Element>;

export type PolymorphicExtendableProps<
	ExtendedProps = PolymorphicDefaultProps,
	OverrideProps = PolymorphicDefaultProps
	// > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
> = ExtendedProps & OverrideProps;

export type PolymorphicInheritableElementProps<
	Element extends PolymorphicElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicExtendableProps<PolymorphicOtherProps<Element>, Props>;

export type PolymorphicProps<
	Element extends PolymorphicElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicInheritableElementProps<Element, Props>;

export type PolymorphicRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Ref<
	PolymorphicElement<Element>
>;
