import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type ButtonLightStylingProps = Pick<ButtonStyleProps, Picked>;
