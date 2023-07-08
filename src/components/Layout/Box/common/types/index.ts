import { ElementType } from 'react';

import { Nullable } from '../../../../../common/types';
import {
	__DEFAULT_POLYMORPHIC_ELEMENT__,
	__DEFAULT_POLYMORPHIC_OBJECT__,
	PolymorphicComponentProps,
	PolymorphicRef
} from '../../../../../common/types/polymorphic';

export type BoxProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = PolymorphicComponentProps<Element, Props>;

export type BoxRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = Nullable<
	PolymorphicRef<Element>
>;
