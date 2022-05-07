import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading' | 'size';

export type IconButtonLightDisabledStylingProps = Pick<IconButtonStyleProps, Picked>;
