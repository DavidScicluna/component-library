import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLoading' | 'size';

export type IconButtonDarkDisabledStylingProps = Pick<IconButtonStyleProps, Picked>;
