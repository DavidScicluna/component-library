import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type IconButtonLightActiveStylingProps = Pick<IconButtonStyleProps, Picked>;
