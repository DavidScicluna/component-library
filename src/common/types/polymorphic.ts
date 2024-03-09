import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
	FocusEvent,
	FormEvent,
	MouseEvent,
	SyntheticEvent
} from 'react';

import type { Style } from '.';
import type { MergeTypes, PickFrom } from './utility';

export type PolymorphicElementType = ElementType;
export type PolymorphicElement<Element extends PolymorphicElementType> = Element extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[Element]
	: JSX.IntrinsicElements[PolymorphicDefaultElement];

export type PolymorphicDefaultElement = PickFrom<PolymorphicElementType, 'div'>;
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export type PolymorphicDefaultProps = {};

export type PolymorphicMouseEvent = MouseEvent<HTMLElement, globalThis.MouseEvent>;
export type PolymorphicChangeEvent = ChangeEvent<HTMLElement>;
export type PolymorphicFocusEvent = FocusEvent<HTMLElement>;
export type PolymorphicFormEvent = FormEvent<HTMLElement>;
export type PolymorphicSyntheticEvent = SyntheticEvent<HTMLElement>;

type PolymorphicOtherProps<Element extends PolymorphicElementType, Props = PolymorphicDefaultProps> = Props & {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
};

export type PolymorphicMergeProps<
	ExtendedProps = PolymorphicDefaultProps,
	OverrideProps = PolymorphicDefaultProps
	// > = Omit<ExtendedProps, keyof OverrideProps> & OverrideProps;
> = MergeTypes<ExtendedProps, OverrideProps>;

// export type PolymorphicExtendableProps<
// 	ExtendedProps = PolymorphicDefaultProps,
// 	OverrideProps = PolymorphicDefaultProps
// > = Omit<ExtendedProps, keyof OverrideProps> & OverrideProps;
// MergeTypes<ExtendedProps, OverrideProps>;

// export type PolymorphicInheritableElementProps<
// 	Element extends PolymorphicElementType,
// 	Props = PolymorphicDefaultProps
// > = PolymorphicExtendableProps<PolymorphicOtherProps<Element>, ComponentProps<Element>>;

// export type PolymorphicProps<
// 	Element extends PolymorphicElementType,
// 	Props = PolymorphicDefaultProps
// > = PolymorphicInheritableElementProps<Element, Props>;

export type PolymorphicProps<
	Element extends PolymorphicElementType,
	Props = PolymorphicDefaultProps
> = PolymorphicMergeProps<ComponentPropsWithoutRef<Element>, PolymorphicOtherProps<Element, Props>>;

export type PolymorphicRef<Element extends PolymorphicElementType> = ComponentPropsWithRef<Element>['ref'];
