import { ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type SpaceDimension = number;

export type SpaceProps = Omit<BoxProps, 'children'> & {
	width?: ResponsiveValue<SpaceDimension>;
	height?: ResponsiveValue<SpaceDimension>;
};

export type SpaceRef = BoxRef;
