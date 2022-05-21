import { TagStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type TagDisabledStylingProps = Pick<TagStyleProps, Picked>;
