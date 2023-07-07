import { ResponsiveValue } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../Box/common/types';

export type AspectRatioRatio = 'auto' | 'square' | 'video' | [number, number];

export type AspectRatioProps = BoxProps & {
	ratio?: ResponsiveValue<AspectRatioRatio>;
};

export type AspectRatioRef = BoxRef;
