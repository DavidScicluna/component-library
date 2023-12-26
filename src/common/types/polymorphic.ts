import type {
	Attributes,
	ChangeEvent,
	ComponentProps,
	ElementType,
	FocusEvent,
	FormEvent,
	HTMLAttributes,
	MouseEvent,
	ReactNode,
	Ref
} from 'react';

import type { Nullish, Style } from '.';

export type PolymorphicElement<Element extends ElementType = PolymorphicDefaultElement> =
	Element extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Element] : Element;

export type PolymorphicDefaultElement = Extract<ElementType, 'div'>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PolymorphicDefaultProps = any;

export type PolymorphicMouseEvent<Element extends ElementType = PolymorphicDefaultElement> = MouseEvent<
	PolymorphicElement<Element>,
	globalThis.MouseEvent
>;

export type PolymorphicChangeEvent<Element extends ElementType = PolymorphicDefaultElement> = ChangeEvent<
	PolymorphicElement<Element>
>;

export type PolymorphicFocusEvent<Element extends ElementType = PolymorphicDefaultElement> = FocusEvent<
	PolymorphicElement<Element>
>;

export type PolymorphicFormEvent<Element extends ElementType = PolymorphicDefaultElement> = FormEvent<
	PolymorphicElement<Element>
>;

type PolymorphicOtherProps<Element extends ElementType = PolymorphicDefaultElement> = HTMLAttributes<Attributes> & {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
} & ComponentProps<Element>;

export type PolymorphicExtendableProps<
	ExtendedProps = PolymorphicDefaultProps,
	OverrideProps = PolymorphicDefaultProps
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type PolymorphicInheritableElementProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicExtendableProps<PolymorphicOtherProps<Element>, Props>;

export type PolymorphicComponentProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props = PolymorphicDefaultProps
> = PolymorphicInheritableElementProps<Element, Props>;

export type PolymorphicRef<Element extends ElementType = PolymorphicDefaultElement> = Ref<PolymorphicElement<Element>>;

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
