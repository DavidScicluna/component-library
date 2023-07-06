import { ResponsiveValue, Space } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type CenterProps = BoxProps & {
	spacing?: ResponsiveValue<Space>;
};

export type CenterRef = BoxRef;
