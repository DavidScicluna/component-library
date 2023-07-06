import { ResponsiveValue, Space } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type SimpleGridProps = BoxProps & {
	columns: ResponsiveValue<number>;
	spacing?: ResponsiveValue<Space>;
};

export type SimpleGridRef = BoxRef;
