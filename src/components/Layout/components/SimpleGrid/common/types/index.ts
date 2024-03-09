import type { PolymorphicElementType, ResponsiveValueProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type SimpleGridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type SimpleGridNonResponsiveValueProps = { columns: SimpleGridColumn; spacing?: ThemeSpacing };
export type SimpleGridResponsiveValueProps = ResponsiveValueProps<SimpleGridNonResponsiveValueProps>;

export type SimpleGridUniqueProps = BoxOtherProps & SimpleGridResponsiveValueProps;

export type SimpleGridProps<Element extends PolymorphicElementType> = BoxProps<Element, SimpleGridUniqueProps>;

export type SimpleGridRef<Element extends PolymorphicElementType> = BoxRef<Element>;
