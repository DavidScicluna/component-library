import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type IconButtonLightStylingProps = Pick<IconButtonStyleProps, Picked>;
