import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardDarkActiveStylingProps = Pick<CardStyleProps, Picked>;
