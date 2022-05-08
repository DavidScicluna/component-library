import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight';

export type CardLightActiveStylingProps = Pick<CardStyleProps, Picked>;
