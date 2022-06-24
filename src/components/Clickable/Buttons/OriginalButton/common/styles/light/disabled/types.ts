import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading' | 'size';

export type ButtonLightDisabledStylingProps = Pick<ButtonStyleProps, Picked>;
