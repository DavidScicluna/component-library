import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight';

export type CardDarkStylingProps = Pick<CardStyleProps, Picked>;
