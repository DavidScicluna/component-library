import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'size';

export type TagLightStylingProps = Pick<TagStyleProps, Picked>;
