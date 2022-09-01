import { CollapsibleCardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight' | 'isOpen';

export type CollapsibleCardDarkActiveStylingProps = Pick<CollapsibleCardStyleProps, Picked>;
