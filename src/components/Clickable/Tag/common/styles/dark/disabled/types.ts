import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TagDarkDisabledStylingProps = Pick<TagStyleProps, Picked>;
