import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type ButtonLightActiveStylingProps = Pick<ButtonStyleProps, Picked>;
