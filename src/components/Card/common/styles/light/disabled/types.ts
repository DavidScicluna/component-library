import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardLightDisabledStylingProps = Pick<CardStyleProps, Picked>;
