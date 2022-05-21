import { TagStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type TagActiveStyleProps = Pick<TagStyleProps, Picked>;
