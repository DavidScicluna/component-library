import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'isLight';

export type CardDarkStylingProps = Pick<CardStyleProps, Picked>;
