import { ElementType, HTMLAttributes } from 'react';

import { Nullable } from '../../../../../common/types';
import {
	__DEFAULT_POLYMORPHIC_ELEMENT__,
	PolymorphicComponentProps,
	PolymorphicRef
} from '../../../../../common/types/polymorphic';

export type BoxProps<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = HTMLAttributes<Element> &
	PolymorphicComponentProps<Element>;

export type BoxRef<Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__> = Nullable<
	PolymorphicRef<Element>
>;
