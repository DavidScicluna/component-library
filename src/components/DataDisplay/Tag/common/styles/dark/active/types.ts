import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type TagDarkActiveStylingProps = Pick<TagStyleProps, Picked>;
