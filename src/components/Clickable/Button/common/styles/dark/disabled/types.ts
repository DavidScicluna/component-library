import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading';

export type ButtonDarkDisabledStylingProps = Pick<ButtonStyleProps, Picked>;
