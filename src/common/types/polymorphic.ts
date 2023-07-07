import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

// TODO: Maybe move to default/constants
export const __DEFAULT_POLYMORPHIC_ELEMENT__: ElementType = 'div';

export type PolymorphicRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> =
	ComponentPropsWithRef<Element>['ref'];

export type PolymorphicComponentProps<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> =
	ComponentPropsWithoutRef<Element> & {
		as?: Element;
	};
