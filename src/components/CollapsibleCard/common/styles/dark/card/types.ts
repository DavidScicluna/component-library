import { CollapsibleCardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isFixed' | 'isLight' | 'isOpen';

export type CollapsibleCardDarkStylingProps = Pick<CollapsibleCardStyleProps, Picked>;
