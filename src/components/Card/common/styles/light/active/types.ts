import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardLightActiveStylingProps = Pick<CardStyleProps, Picked>;
