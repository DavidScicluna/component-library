import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardDarkStylingProps = Pick<CardStyleProps, Picked>;
