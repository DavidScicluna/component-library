import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
	FocusEvent,
	FormEvent,
	HTMLAttributes,
	MouseEvent
} from 'react';

import type { __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';

import type { PickFrom, Style } from '.';

export type PolymorphicDefaultElement = PickFrom<ElementType, 'div'>;

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

type PolymorphicProps<Element extends ElementType = PolymorphicDefaultElement> = {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
} & Omit<HTMLAttributes<PolymorphicRef<Element>>, 'color'>;
// & ComponentPropsWithoutRef<Element>;

export type PolymorphicComponentProps<
	Element extends ElementType = PolymorphicDefaultElement,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = Props & PolymorphicProps<Element>;

export type PolymorphicRef<Element extends ElementType = PolymorphicDefaultElement> =
	ComponentPropsWithRef<Element>['ref'];
