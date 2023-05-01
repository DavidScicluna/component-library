import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { RatingIconProps } from '../types';

type Picked = 'color' | 'colorMode' | 'isError' | 'isWarning' | 'isSuccess' | 'size';

export type RatingIconStyleProps = {
	theme: Theme;
	isHovering: boolean;
} & Pick<RatingIconProps, Picked>;

export type RatingIconStyleReturn = {
	rating: Style;
	active: Style;
	disabled: Style;
	readOnly: Style;
};
