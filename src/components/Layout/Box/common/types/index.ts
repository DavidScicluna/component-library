import { ElementType } from 'react';

import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_OBJECT__ } from '../../../../../common/constants';
import type { Nullable } from '../../../../../common/types';
import type { PolymorphicComponentProps, PolymorphicRef } from '../../../../../common/types/polymorphic';

export type BoxProps<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
> = PolymorphicComponentProps<Element, Props>;

export type BoxRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = Nullable<
	PolymorphicRef<Element>
>;
