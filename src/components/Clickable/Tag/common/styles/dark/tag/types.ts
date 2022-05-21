import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'size';

export type TagDarkStylingProps = Pick<TagStyleProps, Picked>;
