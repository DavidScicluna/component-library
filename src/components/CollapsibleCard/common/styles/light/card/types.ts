import { CollapsibleCardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isFixed' | 'isLight' | 'isOpen';

export type CollapsibleCardLightStylingProps = Pick<CollapsibleCardStyleProps, Picked>;
