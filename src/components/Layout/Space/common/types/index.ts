import { ElementType } from 'react';

import { ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type SpaceDimension = number;

export type SpaceProps<Element extends ElementType> = BoxProps<
	Element,
	{
		width?: ResponsiveValue<SpaceDimension>;
		height?: ResponsiveValue<SpaceDimension>;
	}
>;

export type SpaceRef<Element extends ElementType> = BoxRef<Element>;
