import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading';

export type ButtonLightDisabledStylingProps = Pick<ButtonStyleProps, Picked>;
