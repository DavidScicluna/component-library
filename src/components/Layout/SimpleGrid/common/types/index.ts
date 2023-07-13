import { ElementType } from 'react';

import type { ResponsiveValue } from '../../../../../common/types';
import type { Space } from '../../../../../common/types/theme';
import type { BoxProps, BoxRef } from '../../../Box/common/types';

export type SimpleGridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SimpleGridColumns = SimpleGridColumn[];

export type SimpleGridProps<Element extends ElementType> = BoxProps<
	Element,
	{
		columns: ResponsiveValue<SimpleGridColumn>;
		spacing?: ResponsiveValue<Space>;
	}
>;

export type SimpleGridRef<Element extends ElementType> = BoxRef<Element>;
