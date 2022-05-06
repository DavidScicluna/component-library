import { ButtonStyleProps } from '../types';

type Picked = 'theme' | 'isLoading' | 'size';

export type ButtonDisabledStylingProps = Pick<ButtonStyleProps, Picked>;
