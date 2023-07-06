import { Breakpoint, ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type ContainerSize = Exclude<Breakpoint, 'xs'> | number;

export type ContainerProps = BoxProps & {
	centerContent?: boolean;
	isFluid?: ResponsiveValue<boolean>;
	size?: ResponsiveValue<ContainerSize>;
};

export type ContainerRef = BoxRef;
