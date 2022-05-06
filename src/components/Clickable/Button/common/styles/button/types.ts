import { ButtonStyleProps as AllButtonStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size';

export type ButtonStyleProps = Pick<AllButtonStyleProps, Picked>;
