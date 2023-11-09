import type { ElementType } from 'react';

import type { PolymorphicDefaultElement, ResponsiveValue, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type SimpleGridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SimpleGridColumns = Array<SimpleGridColumn>;

type SimpleGridOtherProps = {
	columns: ResponsiveValue<SimpleGridColumn>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type SimpleGridProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> &
	SimpleGridOtherProps;

export type SimpleGridRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
