import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ElementType,
	FocusEvent,
	FormEvent,
	JSXElementConstructor,
	MouseEvent,
	ReactNode,
	Ref
} from 'react';

import type { Nullish, PickFrom, Style } from '.';

export type PolymorphicDefaultElement = PickFrom<ElementType, 'div'>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphicDefaultProps = {};

export type PolymorphicMouseEvent<Element extends ElementType = PolymorphicDefaultElement> = MouseEvent<
	PolymorphicRef<Element>,
	globalThis.MouseEvent
>;

export type PolymorphicChangeEvent<Element extends ElementType = PolymorphicDefaultElement> = ChangeEvent<
	PolymorphicRef<Element>
>;

export type PolymorphicFocusEvent<Element extends ElementType = PolymorphicDefaultElement> = FocusEvent<
	PolymorphicRef<Element>,
	globalThis.FocusEvent
>;

export type PolymorphicFormEvent<Element extends ElementType = PolymorphicDefaultElement> = FormEvent<
	PolymorphicRef<Element>
>;

type PolymorphicOtherProps<Element extends ElementType = PolymorphicDefaultElement> = {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PolymorphicPropsOf<Element extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
	JSX.LibraryManagedAttributes<Element, ComponentPropsWithoutRef<Element>>;

export type PolymorphicExtendableProps<
	ExtendedProps = PolymorphicDefaultProps,
	OverrideProps = PolymorphicDefaultProps
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type PolymorphicInheritableElementProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicExtendableProps<PolymorphicPropsOf<Element>, Props>;

export type PolymorphicComponentProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicInheritableElementProps<Element, Props & PolymorphicOtherProps<Element>>;

export type PolymorphicRef<Element extends ElementType = PolymorphicDefaultElement> = Ref<
	Element extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Element] : Element
>;

export type PolymorphicComponentPropsWithRef<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicComponentProps<Element, Props> & { ref?: PolymorphicRef<Element> };

export type PolymorphicComponentWithRef<
	DefaultElement extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = {
	<Element extends ElementType = DefaultElement>(
		props: PolymorphicComponentPropsWithRef<Element, Props>
	): Nullish<ReactNode>;
	// propTypes?: React.WeakValidationMap<PolymorphicComponentPropsWithRef<DefaultTag, Props>> | undefined;
	// contextTypes?: React.ValidationMap<any> | undefined;
	// defaultProps?: Partial<PolymorphicComponentPropsWithRef<DefaultTag, Props>> | undefined;
	displayName?: string;
};
