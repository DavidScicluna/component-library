import { CardStyleProps as AllCardStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'isClickable';

export type CardStyleProps = Pick<AllCardStyleProps, Picked>;
