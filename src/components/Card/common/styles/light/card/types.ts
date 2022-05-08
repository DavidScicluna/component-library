import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isClickable' | 'isLight';

export type CardLightStylingProps = Pick<CardStyleProps, Picked>;
