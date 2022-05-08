import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'isLight';

export type CardLightDisabledStylingProps = Pick<CardStyleProps, Picked>;
