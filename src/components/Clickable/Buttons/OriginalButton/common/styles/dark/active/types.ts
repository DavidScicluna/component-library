import { ButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type ButtonDarkActiveStylingProps = Pick<ButtonStyleProps, Picked>;
