import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type CardDarkDisabledStylingProps = Pick<CardStyleProps, Picked>;
