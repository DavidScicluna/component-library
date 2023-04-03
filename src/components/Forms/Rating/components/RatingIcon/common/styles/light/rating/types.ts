import { RatingIconStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isHovering' | 'isWarning' | 'isSuccess';

export type RatingIconLightStyleProps = Pick<RatingIconStyleProps, Picked>;
