import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ElementType,
	FocusEvent,
	FormEvent,
	MouseEvent,
	Ref,
	SyntheticEvent
} from 'react';

import type { Style } from '.';
import type { MergeTypes, PickFrom } from './utility';

export type PolymorphicElementType = ElementType;

export type PolymorphicElement<Element extends PolymorphicElementType> = Element extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[Element]
	: Element;

export type PolymorphicDefaultElement = PickFrom<PolymorphicElementType, 'div'>;
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export type PolymorphicDefaultProps = {};

export type PolymorphicMouseEvent<Element extends PolymorphicElementType> = MouseEvent<
	PolymorphicElement<Element>,
	globalThis.MouseEvent
>;

export type PolymorphicChangeEvent<Element extends PolymorphicElementType> = ChangeEvent<PolymorphicElement<Element>>;

export type PolymorphicFocusEvent<Element extends PolymorphicElementType> = FocusEvent<PolymorphicElement<Element>>;

export type PolymorphicFormEvent<Element extends PolymorphicElementType> = FormEvent<PolymorphicElement<Element>>;

export type PolymorphicSyntheticEvent<Element extends PolymorphicElementType> = SyntheticEvent<
	PolymorphicElement<Element>
>;

type PolymorphicOtherProps<Element extends PolymorphicElementType> = {
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
> = MergeTypes<ExtendedProps, OverrideProps>;

export type PolymorphicInheritableElementProps<
	Element extends PolymorphicElementType,
	Props = PolymorphicDefaultProps
> = PolymorphicExtendableProps<PolymorphicOtherProps<Element>, Props>;

export type PolymorphicProps<
	Element extends PolymorphicElementType,
	Props = PolymorphicDefaultProps
> = PolymorphicInheritableElementProps<Element, Props>;

export type PolymorphicRef<Element extends PolymorphicElementType> = Ref<PolymorphicElement<Element>>;
