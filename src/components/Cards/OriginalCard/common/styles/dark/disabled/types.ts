import { CardStyleProps } from '../../types';

type Picked = 'theme' | 'isLight';

export type CardDarkDisabledStylingProps = Pick<CardStyleProps, Picked>;
