import { CardStyleProps as AllCardStyleProps } from '../types';

export type CardStyleProps = Pick<AllCardStyleProps, 'theme' | 'isClickable' | 'isFixed'>;
