import { ElementType } from 'react';

import { ResponsiveValue, Space } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type SimpleGridColumn = number;
export type SimpleGridColumns = SimpleGridColumn[];

export type SimpleGridProps<Element extends ElementType> = BoxProps<
	Element,
	{
		columns: ResponsiveValue<SimpleGridColumn>;
		spacing?: ResponsiveValue<Space>;
	}
>;

export type SimpleGridRef<Element extends ElementType> = BoxRef<Element>;
