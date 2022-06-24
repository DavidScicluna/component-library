import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type ButtonDarkStylingProps = Pick<ButtonStyleProps, Picked>;
