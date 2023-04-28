import { ButtonStyleProps as AllButtonStyleProps } from '../types';

export type ButtonStyleProps = Pick<AllButtonStyleProps, 'theme' | 'isCompact' | 'isFullWidth' | 'size'>;
