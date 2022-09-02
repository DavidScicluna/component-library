import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'isFixed' | 'isLight';

export type CardLightStylingProps = Pick<CardStyleProps, Picked>;
