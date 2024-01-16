import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type SimpleGridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type SimpleGridOtherProps = {
	columns: SimpleGridColumn;
	spacing?: ThemeSpacing;
};
export type SimpleGridResponsiveValueProps = ResponsiveValueProps<SimpleGridOtherProps, 'columns' | 'spacing'>;

export type SimpleGridProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	SimpleGridResponsiveValueProps
>;

export type SimpleGridRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
