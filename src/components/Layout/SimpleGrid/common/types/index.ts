import { ResponsiveValue, Space } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type SimpleGridColumn = number;
export type SimpleGridColumns = SimpleGridColumn[];

export type SimpleGridProps = BoxProps & {
	columns: ResponsiveValue<SimpleGridColumn>;
	spacing?: ResponsiveValue<Space>;
};

export type SimpleGridRef = BoxRef;
