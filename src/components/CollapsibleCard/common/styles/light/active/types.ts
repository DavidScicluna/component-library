import { CollapsibleCardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight' | 'isOpen';

export type CollapsibleCardLightActiveStylingProps = Pick<CollapsibleCardStyleProps, Picked>;
