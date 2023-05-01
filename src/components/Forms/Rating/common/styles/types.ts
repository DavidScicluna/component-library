import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { RatingProps } from '../types';

type Picked = 'colorMode' | 'isError' | 'isWarning' | 'isSuccess' | 'isFullWidth' | 'size' | 'variant';

export type RatingStyleProps = {
	theme: Theme;
} & Pick<RatingProps, Picked>;

export type RatingStyleReturn = { group: Style };
