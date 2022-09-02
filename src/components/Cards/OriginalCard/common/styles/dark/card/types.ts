import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'isFixed' | 'isLight';

export type CardDarkStylingProps = Pick<CardStyleProps, Picked>;
