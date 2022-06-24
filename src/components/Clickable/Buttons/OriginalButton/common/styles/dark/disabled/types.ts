import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading' | 'size';

export type ButtonDarkDisabledStylingProps = Pick<ButtonStyleProps, Picked>;
