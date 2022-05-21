import { TagStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type TagLightActiveStylingProps = Pick<TagStyleProps, Picked>;
