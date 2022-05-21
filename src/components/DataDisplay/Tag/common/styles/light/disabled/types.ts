import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TagLightDisabledStylingProps = Pick<TagStyleProps, Picked>;
