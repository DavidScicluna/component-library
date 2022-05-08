import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight';

export type CardDarkActiveStylingProps = Pick<CardStyleProps, Picked>;
