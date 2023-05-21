import { CommonThemeProps } from '../../../../../common/types';
import { Color, Space } from '../../../../../theme/types';

export type HorizontalGridColor = Exclude<Color, 'transparent'>;

export type CommonHorizontalGridProps = Pick<CommonThemeProps, 'colorMode'> & {
	color?: HorizontalGridColor;
	spacing?: Space;
};
