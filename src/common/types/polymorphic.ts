import type { ComponentPropsWithRef, ElementType, HTMLAttributes, MouseEvent } from 'react';

import type { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';

import type { PickFrom, Style } from '.';

export type PolymorphicDefaultElement = PickFrom<ElementType, 'div'>;

export type PolymorphicMouseEvent<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = MouseEvent<
	PolymorphicRef<Element>,
	globalThis.MouseEvent
>;

type PolymorphicProps<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = HTMLAttributes<
	PolymorphicRef<Element>
> & {
	/**
	 * The component used for the root node. Either a string to use an HTML element or a component.
	 */
	as?: Element;
	/**
	 * The system prop that allows [emotion css](https://emotion.sh/docs/introduction) objects to be passed down to as styles
	 */
	sx?: Style;
};
// & ComponentPropsWithoutRef<Element>;

export type PolymorphicComponentProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = Props & PolymorphicProps<Element>;

export type PolymorphicRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> =
	ComponentPropsWithRef<Element>['ref'];
