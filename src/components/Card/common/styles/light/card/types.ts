import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardLightStylingProps = Pick<CardStyleProps, Picked>;
