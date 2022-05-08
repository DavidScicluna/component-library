import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight';

export type CardLightStylingProps = Pick<CardStyleProps, Picked>;
